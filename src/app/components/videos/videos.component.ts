import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  @Input() video: any = undefined;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  async goTo(){
    await this.navCtrl.navigateForward(`/reproductor/${this.video.enlace}/${this.video.titulo}`);
  }

}
