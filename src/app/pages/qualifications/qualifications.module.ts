import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualificationsRoutingModule } from './qualifications-routing.module';
import { QualificationsComponent } from './qualifications.component';


@NgModule({
  declarations: [
    QualificationsComponent
  ],
  imports: [
    CommonModule,
    QualificationsRoutingModule
  ]
})
export class QualificationsModule { }
