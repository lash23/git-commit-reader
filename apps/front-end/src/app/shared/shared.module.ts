import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { TableItemComponent } from './components/table-item/table-item.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    PageTitleComponent,
    TableItemComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageTitleComponent,
    TableItemComponent,
    TableComponent,
  ]
})
export class SharedModule { }
