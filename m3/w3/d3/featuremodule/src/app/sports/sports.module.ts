import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSportsComponent } from './lista-sports/lista-sports.component';
import { SportComponent } from './sport/sport.component';
import { SportPageComponent } from './sport-page.page';
import { SportsRoutingModule } from './sports-routing.module';
import { ProvaComponent } from './prova/prova.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SportPageComponent,
    ListaSportsComponent,
    SportComponent,
    ProvaComponent
  ],
  imports: [
    CommonModule,
    SportsRoutingModule,
    SharedModule
  ],
  exports: [SportsRoutingModule]
})
export class SportsModule { }
