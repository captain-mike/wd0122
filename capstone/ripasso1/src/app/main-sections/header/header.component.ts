import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  links:any[] = [
    {
      text: 'Home',
      routerLink : ['/'],
      forLoggedUsed : false,
      classes: 'nav-link px-2 text-secondary'
    },
    {
      text: 'Customers',
      routerLink : ['/customers'],
      forLoggedUsed : true,
      classes: 'nav-link px-2 text-white'
    },
    {
      text: 'Invoices',
      routerLink : ['/invoices'],
      forLoggedUsed : true,
      classes: 'nav-link px-2 text-white'
    },
    {
      text: 'Users',
      routerLink : ['/users'],
      forLoggedUsed : true,
      classes: 'nav-link px-2 text-white'
    }
  ]

  userLogged!:boolean;

  ngOnInit(): void {
    this.router.events.subscribe(res => {//controllo se viene cambiata la rotta
      if(res instanceof NavigationStart){//eseguo il controllo solo in fase di attivazione della rotta, per non ripetere troppe volte l'azione
        this.userLogged = this.auth.isUserLoggedIn();
      }
    });
  }

  logout(){
    this.auth.logout();
  }

}
