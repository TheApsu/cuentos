import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { LoginService } from './services/login.service';
import { UiService } from './services/ui.service';

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
