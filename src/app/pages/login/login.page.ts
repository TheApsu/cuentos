import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private loginSv: LoginService
  ) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[\w\.g]+@+[\w]+[.]+[\D]{2,10}$/)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  async login() {
    this.loginSv.auth(this.formGroup.value);
    // await this.goTo('tab/principal');
  }

  async goTo(href){
    this.navCtrl.navigateForward(href);
  }

}
