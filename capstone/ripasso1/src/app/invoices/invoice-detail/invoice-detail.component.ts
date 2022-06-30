import { Invoices } from './../../models/invoices';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoicesService } from '../invoices.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private invoiceSvc: InvoicesService
    ) { }

  invoice!:Invoices;

  ngOnInit(): void {

    console.log(this.router)
    this.router.params.subscribe((params:any) => {

      this.invoiceSvc.getInvoiceByID(params.id).subscribe(res =>{

        this.invoice = res

      })

    })

  }

}
