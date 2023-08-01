import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';
import { UiService } from 'src/app/services/ui.service';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  public videoUri = 'https://theapsu.github.io/videos/miniaturas/';
  public spanish = [];
  public lang = 'english';
  public english = [];

  constructor(
    private servicio: ServicioService,
  ) { }

  async ngOnInit() {
    const data = (await this.servicio.ConsultarVideos())?.videos;
    console.log('data :>> ', data);
    this.english = data.filter(x => x.lang === 'english');
    this.spanish = data.filter(x => x.lang === 'spanish');
  }

  segmentChanged(){

  }
}
