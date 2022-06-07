import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {

  /**
   * REACTIVE FORMS
   */
  form!:FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      city: new FormControl(null),
      sports: new FormArray([])
    })
  }

  addSport(){
    let control = new FormControl(null);//creo un nuovo form control
    (this.form.get('sports') as FormArray).push(control);
  }

  getSportFields(){
    return (this.form.get('sports') as FormArray).controls
  }

  getFormC(name:string){
    return this.form.get(name)
  }

  submit(){
    console.log(this.form)
  }
}
