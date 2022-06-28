import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogIn, ISignUpResponse } from '../auth/auth';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth:AuthService, private router:Router) { }

  formData:ILogIn = {
    email: 'admin@admin.it',
    password: 'password'
  }

  logIn(){
    this.auth.logIn(this.formData)
    .subscribe((res:ISignUpResponse) => {
      console.log(res);
      this.auth.saveJWT(res.accessToken);
      this.auth.saveLoggedUser(res.user);
      this.router.navigate(['/customers'])
    })
  }


}
