import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../users/user';
import { ISignUp, ILogIn, ISignUpResponse } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiRegister = 'http://localhost:4201/users/register'
  apiLogin = 'http://localhost:4201/login'

  constructor(private http: HttpClient, private router: Router) { }


  signUp(user: ISignUp) {
    return this.http.post<ISignUpResponse>(this.apiRegister,user)
  }

  logIn(data:ILogIn){
    return this.http.post<ISignUpResponse>(this.apiLogin,data)
  }

  saveJWT(token:string){
    localStorage.setItem('jwt',token)
  }
  saveLoggedUser(user:User){
    localStorage.setItem('loggedUser',JSON.stringify(user))
  }

  getLoggedUser(){
    return JSON.parse(localStorage.getItem('loggedUser') || '{}')
  }

}
