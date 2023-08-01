import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  public video = '/assets/principal/video.jpeg';
  public stories = '/assets/img/login-background.jpeg';
  public games = '/assets/principal/games.jpeg';

  constructor(
    private alertController: AlertController,
    public loginSv: LoginService
  ) {}

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  
  openGames(){
    window.open('https://arbolabc.com/');
  }

}
