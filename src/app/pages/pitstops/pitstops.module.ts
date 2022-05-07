import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PitstopsRoutingModule } from './pitstops-routing.module';
import { PitstopsComponent } from './pitstops.component';


@NgModule({
  declarations: [
    PitstopsComponent
  ],
  imports: [
    CommonModule,
    PitstopsRoutingModule
  ]
})
export class PitstopsModule { }
