import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {

  }

  authData = {
    email : 'admin@admin.it',
    password : 'password'
  }

  login(){
    this.auth.login(this.authData).subscribe((res:any) => {
      console.log(res);
      this.auth.logUser(res.accessToken)
    })
  }

}
