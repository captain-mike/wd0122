import { Component, Input, OnInit } from '@angular/core';
import { User } from '../class/user';

@Component({
  selector: '.app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() element!:User;

}
