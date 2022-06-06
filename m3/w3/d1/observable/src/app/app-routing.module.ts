import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { PaginaComponent } from './pagina/pagina.component';

const routes: Routes = [
  {
    path: 'pagina1',
    component: PaginaComponent
  },
  {
    path: 'observable',
    component: ObservableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
