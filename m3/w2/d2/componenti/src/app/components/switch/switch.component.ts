import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fruttoScelto:string = ''

  cambiaFrutto(event:any):void {
    this.fruttoScelto = event.target.value
  }

}
