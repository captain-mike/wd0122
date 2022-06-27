import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ISignUpResponse } from '../auth/auth';
import { AuthService } from '../auth/auth.service';
import { User } from '../users/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService) { }

  signUpData:User = new User();

  ngOnInit(): void {

  }

  saveNewUser(){
    this.auth.signUp(this.signUpData)
    .subscribe((res:ISignUpResponse) => {
      console.log(res);
      Swal.fire(
        `Complimenti ${res.user.nome} ${res.user.cognome} !`,
        'Ti sei registrato correttamente!',
        'success'
      )
    })
  }

}
