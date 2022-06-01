import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../class/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router:ActivatedRoute
    ) { }

  userId!:number;
  user!: User;
  name: string = ''
  lastName: string = ''
  gender: string = ''

  ngOnInit(): void {

    let id:number = Number(this.router.snapshot.params['id'])
    this.userId = id;

    this.user = this.userService.getUserById(id)

    this.name = this.user.name
    this.lastName = this.user.lastname
    this.gender = this.user.gender

  }


  save(){
    //creo istanza utente
    let newUser = new User(this.name, this.lastName, this.gender)
    newUser.id = this.userId;
    //salvo l'utente inviandolo al service
    this.userService.updateUser(newUser)
  }



}
