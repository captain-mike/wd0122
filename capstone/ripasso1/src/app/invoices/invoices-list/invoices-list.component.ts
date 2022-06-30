import { Invoices } from './../../models/invoices';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customers/customer';
import { CustomerService } from 'src/app/customers/customer.service';
import { InvoicesService } from '../invoices.service';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {

  constructor(
    private invoiceSvc: InvoicesService,
    private customerSvc: CustomerService
    ) { }

  customers!: Customer[];
  invoices!: Invoices[];

  ngOnInit(): void {

    this.invoiceSvc.getAll().subscribe(invoices => {
      this.customerSvc.getAllUsers().subscribe(customers => {

        invoices.forEach(i => {

          let customer = customers.find(c => c.id === i.customer)

          if(customer){
            i.customerData = customer
          }

          i.scadenza = new Date(Number(i.scadenza)).toLocaleDateString()
        })

        this.invoices = invoices
        this.customers = customers
      })
    })

  }

}
