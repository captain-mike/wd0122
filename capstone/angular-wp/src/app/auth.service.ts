import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
type authResponse = {
  token:string,
  user_email:string,
  user_nicename:string,
  user_display_name:string
}
type loginData = {}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginApiUrl:string = 'http://wp-api.test/wp-json/jwt-auth/v1/token';

  login(username:string, password:string):Observable<authResponse> {
    let loginData:loginData = {
      username: username,
      password: password
    }
    return this.http.post<authResponse>(this.loginApiUrl,loginData)
  }


  saveJWT(token:string){
      localStorage.setItem('jwt',token)
  }


}
