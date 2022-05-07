import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WinsRoutingModule } from './wins-routing.module';
import { WinsComponent } from './wins.component';


@NgModule({
  declarations: [
    WinsComponent
  ],
  imports: [
    CommonModule,
    WinsRoutingModule
  ]
})
export class WinsModule { }
