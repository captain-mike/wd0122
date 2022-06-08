import { Component, OnInit } from '@angular/core';

@Component({
  template: `

    <h1>Pagina sports</h1>

    <app-lista-sports></app-lista-sports>

  `
})
export class SportPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
