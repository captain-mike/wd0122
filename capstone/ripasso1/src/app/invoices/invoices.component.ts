import { Prodotti } from './../models/prodotti';
import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../prodotti.service';
import { Customer } from '../customers/customer';
import { CustomerService } from '../customers/customer.service';
import { InvoicesService } from './invoices.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  constructor(
    private prodSvc: ProdottiService,
    private customerSvc: CustomerService,
    private invoiceSvc: InvoicesService
    ) { }


    customers!:Customer[];
    prodotti!:Prodotti[];

    customerSelezionato:number = 0;
    prodSelezionati:number[] = [];
    scadenza!:Number;
    data_emissione!:Number;


  ngOnInit(): void {

    this.prodSvc.getAll()
    .subscribe((res:Prodotti[]) => this.prodotti = res)
    this.customerSvc.getAllUsers()
    .subscribe((res:Customer[]) => this.customers = res)

  }

  addInvoice(){
    this.invoiceSvc.addInvoice({
      id:null,
      customer:this.customerSelezionato,
      customerData:null,
      prodotti:this.prodSelezionati,
      scadenza:this.scadenza,
      data_emissione:this.data_emissione
    })
    .subscribe(res => console.log(res))
  }

  setDateObject(event:any){
    if(event.target.name == 'data_emissione'){
      this.data_emissione = new Date(event.target.value).getTime()
    }else if(event.target.name == 'scadenza'){
      this.scadenza = new Date(event.target.value).getTime()
    }
  }

  log(event:any){
    console.log(event.target.value)
  }


}
