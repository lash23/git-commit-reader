import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitsRoutingModule } from './commits-routing.module';
import { CommitsComponent } from './commits.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CommitsComponent
  ],
  imports: [
    CommonModule,
    CommitsRoutingModule,
    SharedModule
  ]
})
export class CommitsModule { }
