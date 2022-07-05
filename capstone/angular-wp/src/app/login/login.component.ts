import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  username = '';
  password = '';

  login(){
    this.auth.login(this.username, this.password).subscribe(res => {
      this.auth.saveJWT(res.token)
    })
  }


}
