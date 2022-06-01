import { IUser } from "../interface/user";

export class User implements IUser {
  name: string;
  lastname: string;
  gender: string;

  constructor(name:string,lastname:string,gender:string) {
    this.name = name;
    this.lastname = lastname;
    this.gender = gender;
  }

}
