import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private loginSv: LoginService, private uiSv: UiService) {}

  async ngOnInit() {
    // await this.uiSv.showLoading();
    await this.loginSv.verifyUser();
    // await this.uiSv.dismissLoading();
    if (localStorage.getItem('token')) {
      await this.loginSv.verifyPaypal(false);
    }
  }
}
