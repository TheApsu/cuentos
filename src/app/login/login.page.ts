import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController: AlertController) {}

  ngOnInit() {
  }

  async Mensaje() {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'Por favor, ingrese con sus credeciales de acceso.',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
