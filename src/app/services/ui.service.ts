import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private _loading: HTMLIonLoadingElement = undefined;

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  async showLoading(message = 'Cargando...'){
    this._loading = await this.loadingController.create({
      message,
    })

    await this._loading.present();
    return true;
  }

  async dismissLoading(){
    if(this._loading) await this._loading.dismiss();
    return true;
  }

  async showToast(message){
    const toast = await this.toastController.create({
      message,
      duration: 4000,
      cssClass: 'toastSv'
    })

    await toast.present();
  }

  async showAlert(message, cssClass = 'alert-modal'){
    const alert = await this.alertController.create({
      header: 'Alerta',
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Aceptar',
          role: 'accept'
        }
      ],
      cssClass
    });
  
    await alert.present();
    return await alert.onDidDismiss();
  }

  async showModal(component, cssClass?, componentProps?, backdropDismiss?){
    const modal = await this.modalController.create({
      component,
      cssClass,
      componentProps,
      backdropDismiss
    })

    await modal.present();
    return await modal.onDidDismiss();
  }
}
