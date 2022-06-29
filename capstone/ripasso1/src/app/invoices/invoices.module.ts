import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InvoicesComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    FormsModule
  ]
})
export class InvoicesModule { }
