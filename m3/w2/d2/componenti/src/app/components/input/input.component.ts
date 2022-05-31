import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nome:string = 'Marta';
  cambiaNome(event:Event){

    let element = <HTMLInputElement>event.target
    this.nome = element.value;

  }

  type:string = 'password'
  mostraNascondiPassword(){
    if(this.type == 'password'){
      this.type = 'text'
    }else{
      this.type = 'password'
    }
  }

  cambiaEtichetta(){
    return this.type == 'password' ? 'Mostra password' : 'Nascondi password'
  }

}
