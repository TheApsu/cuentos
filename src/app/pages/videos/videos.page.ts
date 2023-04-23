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

  public videoUri = '/assets/videos/'
  public items = []

  constructor(
    private servicio: ServicioService,
  ) { }

  async ngOnInit() {
    this.items = await this.servicio.ConsultarVideos();
  }

}
