import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.page.html',
  styleUrls: ['./visor.page.scss'],
})

export class VisorPage implements OnInit {
  
  public titulo = "Titulo";
  public id = this.route.snapshot.paramMap.get('id');
  public url = environment.cuentosUrl;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }
  
  ngOnInit() {
    this.titulo = this.route.snapshot.paramMap.get('titulo');
  }

  async back(){
    await this.navCtrl.navigateBack('tab/principal/cuentos');
  }

}
