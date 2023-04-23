import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public registerForm: FormGroup;

  constructor( 
    private loginSv: LoginService,
    private fb: FormBuilder,
    private uiSv: UiService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [{ value: '' }, [ Validators.required ]],
      // email: [{ value: '' }, [ Validators.required, Validators.pattern(/^[\w\.g]+@+[\w]+[.]+[\D]{2,10}$/) ]],
      // password: [{value: '' }, [ Validators.required, Validators.minLength(5) ]],
      dateOfBirth: [{ value: '' }, [ Validators.required ]],
    })

    this.registerForm.patchValue(this.loginSv.user);
  }

  async logout(){
    await this.loginSv.logout();
  }

  updateUser(){
    this.loginSv.updateUser(this.registerForm.value);
  }

  deleteAccount(){
    this.loginSv.deleteAccount(this.registerForm.value);
  }
}
