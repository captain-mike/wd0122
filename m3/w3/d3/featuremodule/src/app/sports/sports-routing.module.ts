import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSportsComponent } from './lista-sports/lista-sports.component';
import { ProvaComponent } from './prova/prova.component';
import { SportPageComponent } from './sport-page.page';

const routes: Routes = [
  {
    path:'',
    component:ListaSportsComponent
  },
  {
    path:'prova',
    component:ProvaComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsRoutingModule { }
