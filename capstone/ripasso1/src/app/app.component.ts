import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User } from './users/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private auth: AuthService){}

  user:User = this.auth.getLoggedUser();

}
