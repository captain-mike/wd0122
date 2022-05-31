import { Component } from '@angular/core';


@Component({
  selector:'app-test',//<app-test></app-test>
  template: `

  <h1>{{title}}</h1>

  `
})
export class TestComponent{
  title = 'Test'
}
