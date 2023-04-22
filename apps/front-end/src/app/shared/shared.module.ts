import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableItemComponent } from './components/table-item/table-item.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    TableItemComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableItemComponent,
    TableComponent,
  ]
})
export class SharedModule { }
