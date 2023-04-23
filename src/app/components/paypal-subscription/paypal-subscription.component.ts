import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  IPayPalConfig,
  NgxPaypalComponent,
  ICreateSubscriptionRequest
} from "ngx-paypal";
import { HttpService } from 'src/app/services/http.service';
import { ModalController } from '@ionic/angular';
import { UiService } from 'src/app/services/ui.service';

declare var paypal;

@Component({
  selector: 'app-paypal-subscription',
  templateUrl: './paypal-subscription.component.html',
  styleUrls: ['./paypal-subscription.component.scss'],
})
export class PaypalSubscriptionComponent implements OnInit {
  @ViewChild('basic') basicSubscription?: NgxPaypalComponent;
  @Input() req = true;

  public config = undefined;
  public idPaypal = '';

  constructor(
    private httpSv: HttpService,
    private modalController: ModalController,
    private uiSv: UiService
  ) { }

  async ngOnInit() {
    if(this.req){
      await this.uiSv.showLoading();
      const res: any = await this.httpSv.get('paypal/is-active');
      await this.uiSv.dismissLoading()

      if(res.status){
        this.uiSv.showToast(res.msg);
        return await this.close();
      }
    }
    const planId = environment.paypalPlan;
    this.idPaypal = `paypal-button-container-${planId}`
    // this.config = this.getConfig(environment.paypalPlan);
    setTimeout(() => {
      paypal.Buttons({
        style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'subscribe'
        },
        createSubscription: function(data, actions) {
          console.log('createSubscription data :>> ', data);
          console.log('createSubscription actions :>> ', actions);

          return actions.subscription.create({
            /* Creates the subscription */
            plan_id: planId
          });
        },
        onApprove: async (data, actions) => {
          const headers = {
            'Authorization': `bearer ${environment.accessToken}`,
            'Content-Type': 'application/json'
          }
          const res: any = await this.httpSv.getExternal(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${data.subscriptionID}`, headers);
          const apiRes = await this.httpSv.post('paypal/store-payment', { payer_id: res.subscriber.payer_id });
          this.modalController.dismiss(true);
        }
      }).render(`#${this.idPaypal}`);
    })
  }

  async close(){
    this.modalController.dismiss(false);
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