import { Component } from '@angular/core';
import { User } from './class/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users:User[] = [
    {
      name:'Marco',
      lastname:'Rossi',
      gender: 'Maschio'
    },
    {
      name:'Maria',
      lastname:'Rosa',
      gender: 'Femmina'
    }
  ]

  name:string = '';
  lastname:string = '';

  aggiungiUomo(user:User){
      this.users.push(user);
  }

  aggiungiDonna(user:User){
      this.users.push(user);
  }

  visibile:boolean = false;



}
