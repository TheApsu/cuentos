import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { VideosComponent } from './videos/videos.component';
import { PaypalSubscriptionComponent } from './paypal-subscription/paypal-subscription.component';
import { NgxPayPalModule } from 'ngx-paypal'

const declarations = [
  HeaderComponent,
  StoriesComponent,
  VideosComponent,
  PaypalSubscriptionComponent
]

@NgModule({
  declarations,
  imports: [
    CommonModule,
    IonicModule,
    NgxPayPalModule
  ],
  exports: declarations
})
export class ComponentsModule { }
