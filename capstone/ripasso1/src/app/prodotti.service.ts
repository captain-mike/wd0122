import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prodotti } from './models/prodotti';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor(private http: HttpClient) { }

  apiUrl:string = 'http://localhost:4201/prodotti';

  getAll(){
    return this.http.get<Prodotti[]>(this.apiUrl)
  }


}
