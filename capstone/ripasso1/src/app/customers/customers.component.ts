import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import Swal from 'sweetalert2';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers:Customer[] = [];

  customer:Customer = new Customer();

  invisibleColumns:string[] = ['password']

  isNew:boolean = true

  constructor(private customerSvc: CustomerService) { }

  ngOnInit(): void {

    this.customerSvc.getAllUsers()
    .subscribe(customers => {
      this.customers = customers
    })

  }

  getColumns(){
    let keys = Object.keys(this.customer);
    keys.unshift('id')
    keys.push('Azioni')
    return keys.filter(k => !this.invisibleColumns.includes(k));
  }

  saveNewUser(){
    this.customerSvc.createUser(this.customer)
    .subscribe((res:Customer) => {
        console.log(res)
        this.customers.push(res)
        this.resetform()
    })
  }

  editUser(){
    this.customerSvc.updateUser(this.customer)
    .subscribe((res:Customer) => {
        console.log(res);
        let index = this.customers.findIndex(customer => customer.id == res.id)
        this.customers.splice(index,1,res)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
    })

  }

  selectCustomer(customer:Customer){
    this.customer = Object.assign({},customer)                                        //spezzo la connessione, nessun two way data binding
    this.isNew = false
  }

  deleteCustomer(id:number){
    this.customerSvc.deleteUser(id)
    .subscribe(res => {


      this.customers = this.customers.filter(c => c.id != id)

        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `Utente eliminato`,
          showConfirmButton: false,
          timer: 1500
        })
    })
  }

  resetform(){
    this.customer = new Customer();
    this.isNew = true
  }

}
