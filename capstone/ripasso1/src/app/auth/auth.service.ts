import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../users/user';
import { ISignUp, ILogIn, ISignUpResponse } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiRegister:string = 'http://localhost:4201/users/register'
  apiLogin:string = 'http://localhost:4201/login'
  tokenItemKey:string = 'jwt'
  userInfoKey:string = 'loggedUser'

  constructor(private http: HttpClient, private router: Router) { }


  signUp(user: ISignUp) {
    return this.http.post<ISignUpResponse>(this.apiRegister,user)
  }

  logIn(data:ILogIn){
    return this.http.post<ISignUpResponse>(this.apiLogin,data)
  }

  logout(){
    localStorage.removeItem(this.tokenItemKey)
    localStorage.removeItem(this.userInfoKey)
    this.router.navigate([''])
  }

  saveJWT(token:string){
    localStorage.setItem(this.tokenItemKey,token)
  }
  saveLoggedUser(user:User){
    localStorage.setItem(this.userInfoKey,JSON.stringify(user))
  }

  getLoggedUser(){
    return JSON.parse(localStorage.getItem(this.userInfoKey) || '{}')
  }
  getJWT(){
    return localStorage.getItem(this.tokenItemKey) || ''
  }

  isUserLoggedIn():boolean{
    return localStorage.getItem(this.tokenItemKey) != null
  }

}
