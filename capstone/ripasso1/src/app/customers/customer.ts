import { Address } from "../models/address";
import { AddressClass } from "../models/address-class";

export class Customer {
  id!: number;
  nome!: string;
  cognome!: string;
  indirizzo!: Address;
  email!: string;
  password!: string;

  constructor(){
    this.nome = '';
    this.cognome = '';
    this.email = '';
    this.password = '';
    this.indirizzo = new AddressClass();
  }
}
