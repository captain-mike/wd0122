import { User } from './../users/user';
import { Address } from "../models/address";

export interface ISignUp {
  nome: string;
  cognome: string;
  indirizzo: Address;
  email: string;
  password: string;
}
export interface ISignUpResponse {
  accessToken: string
  user: User
}

export interface ILogIn {
  email: string;
  password: string;
}
