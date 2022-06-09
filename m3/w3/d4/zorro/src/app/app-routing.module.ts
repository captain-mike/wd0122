import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'profilo', loadChildren: () => import('./profilo/profilo.module').then(m => m.ProfiloModule) },
  { path: 'info', loadChildren: () => import('./info/info.module').then(m => m.InfoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
