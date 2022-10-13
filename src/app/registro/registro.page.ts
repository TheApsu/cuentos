import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private alertController: AlertController) {}

  ngOnInit() {
  }

  async Mensaje() {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'Se ha registrado.',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
