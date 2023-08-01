import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.page.html',
  styleUrls: ['./reproductor.page.scss'],
})
export class ReproductorPage implements OnInit {
  public title = "Titulo";
  public url = '';

  constructor(
    private route: ActivatedRoute, 
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const lang = this.title = this.route.snapshot.queryParamMap.get('lang');
    this.url = `https://theapsu.github.io/videos/${lang}`;
    this.title = this.route.snapshot.paramMap.get('titulo');
  }


  async back(){
    await this.navCtrl.navigateBack('tab/principal/videos');
  }

}
