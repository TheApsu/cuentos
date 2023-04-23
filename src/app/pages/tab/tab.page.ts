import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PaypalSubscriptionComponent } from 'src/app/components/paypal-subscription/paypal-subscription.component';
import { LoginService } from 'src/app/services/login.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit, OnDestroy {
  private routeObs = new Subscription();
  public homeIcon = 'home';
  public userIcon = 'person-outline';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private uiSv: UiService
  ) { }

  ngOnInit() {
    const routerObs = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary')
    ).subscribe(() => {
      const routeObs = this.route.data.subscribe(() => {
        const location = window.location.pathname;
        if(location === '/tab/principal'){
          this.homeIcon = 'home';
          this.userIcon = 'person-outline';
        }else if(location === '/tab/profile'){
          this.homeIcon = 'home-outline';
          this.userIcon = 'person';
        }else{
          this.userIcon = 'person-outline';
          this.homeIcon = 'home-outline';
        }
      })
      this.routeObs.add(routeObs);
    })
    this.routeObs.add(routerObs);
  }

  ngOnDestroy(): void {
    this.routeObs.unsubscribe();
  }

  openPaypal(){
    console.log('paypal');
    this.uiSv.showModal(PaypalSubscriptionComponent, 'paypal-component')
  }

 

}
