import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstructorPredRoutingModule } from './constructor-pred-routing.module';
import { ConstructorPredComponent } from './constructor-pred.component';


@NgModule({
  declarations: [
    ConstructorPredComponent
  ],
  imports: [
    CommonModule,
    ConstructorPredRoutingModule
  ]
})
export class ConstructorPredModule { }
