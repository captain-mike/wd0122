import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users:User[] = [
    {
      id:0,
      name:'Marco',
      lastname:'Rossi',
      gender: 'Maschio'
    },
    {
      id:1,
      name:'Maria',
      lastname:'Rosa',
      gender: 'Femmina'
    }
  ]

  addUser(user:User):void {
    this.users.push(user);
  }

  updateUser(user:User){
    let index = this.users.findIndex(u => u.id === user.id);
    this.users.splice(index, 1, user);

  }

  deleteUser(){}

  getUserById(id:number):User{
    return <User> this.users.find((user:User) => user.id === id)
  }




}
