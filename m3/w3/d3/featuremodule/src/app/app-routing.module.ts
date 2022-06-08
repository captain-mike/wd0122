import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'sports',
    //component:SportPageComponent
    loadChildren: () => import('./sports/sports.module').then(m => m.SportsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
