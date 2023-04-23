import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.page.html',
  styleUrls: ['./reproductor.page.scss'],
})
export class ReproductorPage implements OnInit {
  public titulo = "Titulo";
  public id = this.route.snapshot.paramMap.get('id');
  public url = 'https://jose-mena.github.io/miscuentos/proyecto/';

  constructor(
    private route: ActivatedRoute, 
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.titulo = this.route.snapshot.paramMap.get('titulo');
  }


  async back(){
    await this.navCtrl.navigateBack('tab/principal/videos');
  }

}
