import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from '../class/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit, OnDestroy {

  prova!:string;

  constructor() {

    console.log(this.prova)
    this.prova = 'new-user';

  }


  ngOnInit(): void {
    console.log(this.prova)
    console.log('creato')
  }

  ngOnDestroy(): void {
    console.log('distrutto')
    this.resetForm();
  }

  @Input() newName!: string;
  @Input() newLastname!: string;

  @Output() onManCreated = new EventEmitter();//le istanze di eventEmitter hanno un nome simile ad un evento
  @Output() onWomanCreated = new EventEmitter();

  onAddMan(){
    let newUser:User = new User(this.newName,this.newLastname,'Maschio');
    this.onManCreated.emit(newUser)
    this.resetForm();
  }
  onAddWoman(){
    let newUser:User = new User(this.newName,this.newLastname,'Femmina');
    this.onWomanCreated.emit(newUser)
    this.resetForm();
  }

  resetForm(){
    this.newName = '';
    this.newLastname = ''
  }


}
