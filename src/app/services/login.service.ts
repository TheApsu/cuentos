import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { NavController, Platform } from '@ionic/angular';
import { UiService } from './ui.service';
import { PaypalSubscriptionComponent } from '../components/paypal-subscription/paypal-subscription.component';
import { App } from '@capacitor/app';
import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _user = undefined;
  private _isVerified = false;

  get isVerified() {
    return this._isVerified;
  }

  set isVerified(value) {
    this._isVerified = value;
  }

  get user() {
    return this._user;
  }

  set user(value) {
    this._user = value;
  }

  constructor(
    private httpSv: HttpService,
    private navCtrl: NavController,
    private uiSv: UiService,
    private platform: Platform,
    private googlePlus: GooglePlus
  ) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      user.dateOfBirth = user.date_of_birth;
      this._user = user;
    }
    // this._token = localStorage.getItem('token') || 'no-value';
  }

  async verifyUser(guard = false) {
    try {
      await this.httpSv.get('user/verify');
      return true;
    } catch (err) {
      console.log(err);
      if (err.error === 'denied' || err.error === 'Token invalido')
        return await this.logout(guard);
      return false;
    }
  }

  async verifyPaypal(showMsg) {
    try {
      await this.httpSv.post('paypal/is-active', {});
      this.isVerified = true;
      if (showMsg)
        await this.uiSv.showToast('Ya puedes disfrutar de nuestro contenido.');
      return true;
    } catch (err) {
      console.error(err);
      if (err.error.msg) {
        const { role } = await this.uiSv.showAlert(
          err.error.msg,
          'alert-modal',
          false,
          true
        );
        if (role === 'accept') {
          const { data } = await this.uiSv.showModal(
            PaypalSubscriptionComponent,
            'paypal-component',
            { req: false },
            false
          );
          if (data) {
            await this.verifyPaypal(true);
            return true;
          }
        }
      } else if (
        err.name === 'HttpErrorResponse' &&
        !err.ok &&
        err.statusText === 'Unknown Error'
      ) {
        await this.uiSv.showAlert(
          'Ha ocurrido un error, intenta mas tarde',
          'alert-modal',
          false,
          false,
          false
        );
        return;
      }

      // if (this.platform.is('capacitor')) {
      //   App.exitApp();
      // } else {
      //   await this.verifyPaypal(false);
      // }
      await this.logout();
      return false;
    }
  }

  async logout(guard?) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // this._token = 'no-value';
    this.httpSv.token = 'no-value';
    if (!guard) await this.navCtrl.navigateRoot('login');
    return false;
  }

  async auth(body, signInWithGoogle = false) {
    try {
      if (signInWithGoogle) {
        this.authWithGoogle(body);
      } else {
        await this.uiSv.showLoading('Iniciando sesión...');
        const res: any = await this.httpSv.post('user/auth', body);
        await this.uiSv.dismissLoading();
        await this.saveUser(res);
      }
    } catch (err) {
      console.error(err);
      await this.uiSv.showToast(err.error.data);
      await this.uiSv.dismissLoading();
    }
  }

  authWithGoogle(body) {
    this.googlePlus
      .login({
        webClientId:
          '1048850765481-v7c5se45kikvftoj6ffdmgt5c3ge292s.apps.googleusercontent.com',
        offline: true,
      })
      .then(async (user) => {
        try {
          console.log('user :>> ', user);
          await this.uiSv.showLoading();
          const res = await this.httpSv.post('user/register', {
            name:
              user.displayName ||
              user.givenName ||
              `user${Math.random() * 10000}`,
            email: user.email,
            provider: 'google',
          });
          await this.uiSv.dismissLoading();
          await this.saveUser(res);
        } catch (e) {
          console.error(e);
          await this.uiSv.dismissLoading();
          await this.uiSv.showToast('Ha ocurrido un error');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async register(body) {
    try {
      await this.uiSv.showLoading();
      const res: any = await this.httpSv.post('user/register', body);
      await this.uiSv.dismissLoading();
      await this.saveUser(res);
    } catch (err) {
      console.error(err);
      await this.uiSv.dismissLoading();
      await this.uiSv.showToast(err.error.data);
    }
  }

  async saveUser(res, update = false) {
    const user = res.data;
    user.dateOfBirth = user.date_of_birth;
    this._user = user;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', res.token);
    this.httpSv.token = res.token;
    if (!update) await this.navCtrl.navigateRoot('tab/principal');
    await this.verifyPaypal(false);
  }

  async updateUser(body) {
    const res = await this.httpSv.post('user/update', body);
    await this.saveUser(res, true);
    this.uiSv.showToast('Guardado exitosamente.');
  }

  async deleteAccount(body) {
    const { role } = await this.uiSv.showAlert(
      '¿Estás seguro que deseas continuar?, Eliminar la cuenta es una acción irreversible.'
    );
    if (role === 'accept') {
      const res: any = await this.httpSv.post('user/destroy', body);
      if (res.status) await this.logout();
      console.log(res);
    }

    // await this.saveUser(res);
    // this.uiSv.showToast('Guardado exitosamente.');
  }
}
