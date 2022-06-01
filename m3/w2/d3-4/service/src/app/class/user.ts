import { IUser } from "../interface/iuser";

export class User implements IUser{
  id!: number;
  name: string;
  lastname: string;
  gender: string;
  constructor(name:string,lastname:string,gender:string) {
    this.id = Math.floor(Math.random() * 100);
    this.name = name;
    this.lastname = lastname;
    this.gender = gender;
  }
}
