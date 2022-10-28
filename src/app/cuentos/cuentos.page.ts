import { Component, OnInit } from '@angular/core';

import { ServicioService } from '../servicio.service';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-cuentos',
  templateUrl: './cuentos.page.html',
  styleUrls: ['./cuentos.page.scss'],
})
export class CuentosPage implements OnInit {

  items = []

  constructor(
    private servicio: ServicioService,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    this.showLoading()
    this.servicio.ConsultarCuentos().subscribe((res) => {
      this.items = res;
      console.log(res)
    });
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 3000,
      cssClass: 'custom-loading',
    });

    loading.present();
  }




}
