import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '.app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

  @Input() titolo!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
