import { Address } from "./address";

export class AddressClass implements Address {
  via!: string;
  citta!: string;
  cap!: number | string;
  civico!: number | string;

  constructor(){
    this.via = ""
    this.citta = ""
    this.cap = ""
    this.civico = ""
  }

}
