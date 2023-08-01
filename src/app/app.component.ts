import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private loginSv: LoginService,
  ) {
  }

  async ngOnInit() {
    await this.loginSv.verifyUser();
    if(localStorage.getItem('token')){
      await this.loginSv.verifyPaypal(false);
    }
  }
}
