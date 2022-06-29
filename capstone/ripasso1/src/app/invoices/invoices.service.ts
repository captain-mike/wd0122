import { Invoices } from './../models/invoices';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http: HttpClient) { }

  apiUrl:string = 'http://localhost:4201/invoices';
  apiUrlCustomer:string = 'http://localhost:4201/invoices?customer=';


  addInvoice(invoice:Invoices){
    return this.http.post(this.apiUrl, invoice)
  }

  getInvoicesByCustomerID(id:number){
    return this.http.get<Invoices[]>(this.apiUrlCustomer+id)
  }

}
