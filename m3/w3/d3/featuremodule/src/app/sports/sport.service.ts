import { Injectable } from '@angular/core';
import { Sport } from './sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor() { }

  sports:Sport[] = [
    {
      name:'calcio'
    },
    {
      name:'tennis'
    },
    {
      name:'basket'
    }
  ];


}
