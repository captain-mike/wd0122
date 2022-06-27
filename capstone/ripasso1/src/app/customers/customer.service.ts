import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  apiUrl = 'http://localhost:4201/customers'

  getAllUsers() {
    return this.http.get<Customer[]>(this.apiUrl)
  }

  createUser(customer:Customer) {
    return this.http.post<Customer>(this.apiUrl, customer)
  }

  updateUser(customer:Customer){
    return this.http.patch<Customer>(this.apiUrl+'/'+customer.id, customer);
  }

  deleteUser(id:number){
    return this.http.delete(this.apiUrl+'/'+id)
  }

}
