import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ItemComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemComponent,
    ListComponent
  ]
})
export class SharedModule { }
