import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  @Input() data: any = undefined;
  public stories = '/assets/cuentos/';

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  goTo(){
    this.navCtrl.navigateForward(`tab/principal/cuentos/visor/${this.data.enlace}/${this.data.titulo}`);
  }

}
