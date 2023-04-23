import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loginSv: LoginService,
    private navCtrl: NavController
  ){}

  async canActivate() 
  {
    const can = await this.loginSv.verifyUser(true);
    console.log(can);
    if(can) return this.navCtrl.navigateRoot('tab/principal');
    return !can
  }
  
}
