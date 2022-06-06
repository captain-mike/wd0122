import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users:User[] = [];

  constructor(private http:HttpClient){//http adesso contiene tutti i metodi per fare chiamate ajax

  }

  fetchUsers(){


    /*
    fetch(https://reqres.in/api/users?page=2)
    .then(res =>{
          console.log(res);

          this.users = res.data

      })
    */
      this.http.get<{data:User[]}>('https://reqres.in/api/users?page=2')
      .pipe(
        map(res => res.data)
      )
      .subscribe(res =>{
          console.log(res);

          this.users = res

      })
  }

}
