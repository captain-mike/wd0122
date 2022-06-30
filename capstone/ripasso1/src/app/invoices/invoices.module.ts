import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { FormsModule } from '@angular/forms';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';


@NgModule({
  declarations: [
    InvoicesComponent,
    InvoicesListComponent,
    InvoiceDetailComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    FormsModule
  ]
})
export class InvoicesModule { }
