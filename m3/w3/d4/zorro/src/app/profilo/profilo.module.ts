import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfiloRoutingModule } from './profilo-routing.module';
import { ProfiloComponent } from './profilo.component';


@NgModule({
  declarations: [
    ProfiloComponent
  ],
  imports: [
    CommonModule,
    ProfiloRoutingModule
  ]
})
export class ProfiloModule { }
