import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoicesComponent } from './invoices.component';

const routes: Routes = [
  { path: '', component: InvoicesListComponent },
  { path: 'new-customer', component: InvoicesComponent },
  { path: ':id', component: InvoiceDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
