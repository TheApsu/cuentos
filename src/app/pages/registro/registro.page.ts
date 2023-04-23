import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private loginSv: LoginService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [ Validators.required ]],
      email: ['', [ Validators.required, Validators.pattern(/^[\w\.g]+@+[\w]+[.]+[\D]{2,10}$/) ]],
      password: ['', [ Validators.required, Validators.minLength(5) ]],
      dateOfBirth: ['', [ Validators.required ]],
    })
  }

  async register() {
    this.loginSv.register(this.registerForm.value);
  }

  async hasAccount(){
    await this.navCtrl.navigateBack('login');
  }

}
