import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomersComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule
  ]
})
export class CustomersModule { }
