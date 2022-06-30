import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserRole(){
    return JSON.parse(localStorage.getItem('loggedUser') || '{}')?.role
  }

}
