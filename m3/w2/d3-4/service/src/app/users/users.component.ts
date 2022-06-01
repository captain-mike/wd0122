import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users!:User[];
  newUser!:User;

  constructor(private userService: UserService){
    this.users = userService.users

    this.newUser = new User('Pippo','Franco','Maschio');
  }

  ngOnInit() {

  }
}
