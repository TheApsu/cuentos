import { Component, OnInit } from '@angular/core';

import { ServicioService } from '../servicio.service';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {


  items = []

  constructor(
    private servicio: ServicioService,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    this.showLoading()
    this.servicio.ConsultarVideos().subscribe((res) => {
      this.items = res;
      console.log(res)
    });
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 2000,
      cssClass: 'custom-loading',
    });

    loading.present();
  }

}
