import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../class/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router:Router
    ) { }

  ngOnInit(): void {

  }

  name: string = ''
  lastName: string = ''
  gender: string = ''

  save(){
    //creo istanza utente
    let newUser = new User(this.name, this.lastName, this.gender)
    //salvo l'utente inviandolo al service
    this.userService.addUser(newUser)
    //reindirizzo il visitatore all home
    this.router.navigate(['/'])
  }

}
