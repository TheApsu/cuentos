import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgxPaypalComponent } from 'ngx-paypal';
import { HttpService } from 'src/app/services/http.service';
import { ModalController } from '@ionic/angular';
import { UiService } from 'src/app/services/ui.service';
import { LoginService } from 'src/app/services/login.service';

declare var paypal;

@Component({
  selector: 'app-paypal-subscription',
  templateUrl: './paypal-subscription.component.html',
  styleUrls: ['./paypal-subscription.component.scss'],
})
export class PaypalSubscriptionComponent
  implements OnInit, ConvertToBaseUnicode
{
  @ViewChild('basic') basicSubscription?: NgxPaypalComponent;
  @Input() req = true;

  public config = undefined;
  public idPaypal = '';

  constructor(
    private httpSv: HttpService,
    private modalController: ModalController,
    private uiSv: UiService,
    private loginSv: LoginService
  ) {}

  async ngOnInit() {
    if (this.req) {
      await this.uiSv.showLoading();
      const res: any = await this.httpSv.get('paypal/is-active');
      await this.uiSv.dismissLoading();

      if (res.status) {
        this.uiSv.showToast(res.msg);
        return await this.close();
      }
    }
    const planId = environment.paypalPlan;
    this.idPaypal = `paypal-button-container-${planId}`;
    // this.config = this.getConfig(environment.paypalPlan);
    setTimeout(() => {
      paypal
        .Buttons({
          style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'subscribe',
          },
          createSubscription: (data, actions) => {
            return actions.subscription.create({
              /* Creates the subscription */
              plan_id: planId,
              // custom_id: this.loginSv.user.id
            });
          },
          onApprove: async (data, actions) => {
            try {
              const accesToken = this.b64EncodeUnicode();
              console.log('accesToken :>> ', accesToken);
              const headers = {
                Authorization: `basic ${accesToken}`,
                'Content-Type': 'application/json',
              };
              const url = environment.production
                ? 'https://api-m.paypal.com/v1/billing/subscriptions'
                : 'https://api-m.sandbox.paypal.com/v1/billing/subscriptions';
              const res: any = await this.httpSv.getExternal(
                `${url}/${data.subscriptionID}`,
                headers
              );
              console.log('billing :>> ', res);
              await this.httpSv.post('paypal/store-payment', {
                payer_id: res.subscriber.payer_id,
              });
              this.modalController.dismiss(true);
            } catch (err) {
              console.error(err);
            }
          },
        })
        .render(`#${this.idPaypal}`);
    });
  }

  b64EncodeUnicode(): string {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    const str = `${environment.paypalKey}:${environment.paypalSecretKey}`;
    return btoa(str);
  }

  async close() {
    this.modalController.dismiss(false);
  }
}

abstract class ConvertToBaseUnicode {
  b64EncodeUnicode(): string {
    return '';
  }
}

// <div id="paypal-button-container-P-40025404DJ6808412MRCDZVA"></div>
// <script src="https://www.paypal.com/sdk/js?client-id=AZjJ5jQsnX_SBJDopiviU-EI1w5FS7iLI61hi1YlQUljWykH5-RMS6MWr3nzNL4p4gcUWERNXhcu7fxF&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
// <script>
//   paypal.Buttons({
//       style: {
//           shape: 'rect',
//           color: 'white',
//           layout: 'horizontal',
//           label: 'subscribe'
//       },
//       createSubscription: function(data, actions) {
//         return actions.subscription.create({
//           /* Creates the subscription */
//           plan_id: 'P-40025404DJ6808412MRCDZVA'
//         });
//       },
//       onApprove: function(data, actions) {
//         alert(data.subscriptionID); // You can add optional success message for the subscriber here
//       }
//   }).render('#paypal-button-container-P-40025404DJ6808412MRCDZVA'); // Renders the PayPal button
// </script>
