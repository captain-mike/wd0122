import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeactivateGuard } from './deactivate.guard';
import { LoginComponent } from './login/login.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    redirectTo: ''
  },
  {
    path: 'register',
    component: RegisterComponent,
    canDeactivate: [DeactivateGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    //canActivateChild: [AuthGuard],//blocca solo i figli
    canActivate: [AuthGuard],//blocca i figli e anche la rotta principale
    children: [
      {
        path:'profilo',
        component:ProfiloComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
