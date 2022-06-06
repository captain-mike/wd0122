import { IUser } from "./iuser";

export class User implements IUser {
  id!: number;
  email!: string;
  first_name!: string;
  last_name!: string;
  avatar!: string;

  constructor(first_name:string, last_name:string){
    this.first_name = first_name;
    this.last_name = last_name;
  }
}
