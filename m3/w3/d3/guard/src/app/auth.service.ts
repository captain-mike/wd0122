import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isUserLoggedIn:boolean = false;

  logIn(){
    this.isUserLoggedIn = true;
    this.router.navigate(['/dashboard'])
  }

  logOut(){
    this.isUserLoggedIn = false;
    this.router.navigate(['/login'])
  }

}
