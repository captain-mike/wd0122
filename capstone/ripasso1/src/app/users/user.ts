import { AddressClass } from "../models/address-class";

export class User {
  id!:number;
  nome!:string;
  cognome!:string;
  indirizzo!:AddressClass;
  ruolo!:string;
  password!:string;
  email!:string;

  constructor(){
    this.nome = '';
    this.cognome = '';
    this.email = '';
    this.password = '';
    this.indirizzo = new AddressClass();
  }
}
