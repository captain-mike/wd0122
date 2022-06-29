import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './auth/guest.guard';

const routes: Routes = [
  {
    path: 'customers',
    canActivate: [AuthGuard],
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'login',
    canActivate: [GuestGuard],
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    canActivate : [GuestGuard],
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'invoices',
    canActivate: [AuthGuard],
    loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
