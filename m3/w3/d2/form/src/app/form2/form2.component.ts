import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  @ViewChild('f',{static:true}) form!:NgForm;
  //seleziono l'elemento identificato con #f all'interno del template
  //lo affido alla proprietà form.
  //{static:true} serve a far si che la proprietà venga valorizzata prima, rendendola disponibile nel metodo ngOnInit(){}


  constructor() { }

  ngOnInit(): void {
    //non serve per far funzionare le validazioni o altro
    //ci serve solo a monitorare gli status change
    this.form.statusChanges?.subscribe(status => {
      console.log(this.form)
    })
  }

  setDati(){
    //set value ci serve a riempire il form
    //ma richiede che tutti i valori siano aggiornati
    this.form.form.setValue({
      authData:{
        email: "info@test.it",
        password: "password"
      },
      city: 'roma'
    })
  }

  updateCity(){
    //si comporta alla stessa maniera di servalue()
    //però ci permette di inserire anche un solo valore
    //ignorerà i campi mancanti
    this.form.form.patchValue({
      city:'reggio-emilia'
    })
  }

  submit(){
    console.log(this.form)
  }
}
