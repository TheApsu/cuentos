import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { NavController } from '@ionic/angular';
import { UiService } from './ui.service';
import { PaypalSubscriptionComponent } from '../components/paypal-subscription/paypal-subscription.component';
import { App } from '@capacitor/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user = undefined;
  get user(){
    return this._user
  }

  set user(value){
    this._user = value;
  }

  constructor(
    private httpSv: HttpService,
    private navCtrl: NavController,
    private uiSv: UiService,
  ) { 
    const user = JSON.parse( localStorage.getItem('user') );
    if(user){
      user.dateOfBirth = user.date_of_birth;
      this._user = user;
    }
    // this._token = localStorage.getItem('token') || 'no-value';
  }

  async verifyUser(guard = false){
    try{
      await this.httpSv.get('user/verify');
      return true;
    }catch(err){
      console.log(err);
      if(err.error === 'denied' || err.error === 'Token invalido') return await this.logout(guard);
      return false;
    }
  }

  async verifyPaypal(showMsg){
    try{
      await this.httpSv.get('paypal/is-active');
      if(showMsg) await this.uiSv.showToast('Ya puedes disfrutar de nuestro contenido.');
      return true
    }catch(err){
      console.error(err);
      if(err.error.msg) {
        const { role } = await this.uiSv.showAlert(err.error.msg, 'alert-modal');
        if(role === 'accept'){
          const { data } = await this.uiSv.showModal(PaypalSubscriptionComponent, 'paypal-component', { req: false }, false)
          if(data) {
            await this.verifyPaypal(true)
            return true;
          };
        }
      }
      App.exitApp();
      return false
    }
  }

  async logout(guard?){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // this._token = 'no-value';
    this.httpSv.token = 'no-value';
    if(!guard) await this.navCtrl.navigateRoot('login');
    console.log('returning false');
    return false;
  }

  async auth(body){
    try{
      const res: any = await this.httpSv.post('user/auth', body);
      this.saveUser(res);
    }catch(err){
      console.error(err);
      await this.uiSv.showToast(err.error.data);
      
    }
  }

  async register(body){
    try{
      await this.uiSv.showLoading();
      const res: any = await this.httpSv.post('user/register', body);
      await this.uiSv.dismissLoading();
      this.saveUser(res);
    }catch(err){
      console.error(err);
      await this.uiSv.dismissLoading();
      await this.uiSv.showToast(err.error.data);
    }
  }

  async saveUser(res, update = false){
    const user = res.data;
    user.dateOfBirth = user.date_of_birth;
    this._user = user;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', res.token)
    this.httpSv.token = res.token;
    if(!update) await this.navCtrl.navigateRoot('tab/principal');
    await this.verifyPaypal(false);
  }

  async updateUser(body){
    const res = await this.httpSv.post('user/update', body);
    await this.saveUser(res, true);
    this.uiSv.showToast('Guardado exitosamente.');
  }

  async deleteAccount(body){
    const { role } = await this.uiSv.showAlert('¿Estás seguro que deseas continuar?, Eliminar la cuenta es una acción irreversible.');
    if(role === 'accept'){
      const res: any = await this.httpSv.post('user/destroy', body);
      if(res.status) await this.logout();
      console.log(res);
    }
    
    
    // await this.saveUser(res);
    // this.uiSv.showToast('Guardado exitosamente.');
  }
}
