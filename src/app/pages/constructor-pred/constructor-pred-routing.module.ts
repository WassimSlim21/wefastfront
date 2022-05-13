import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructorPredComponent } from './constructor-pred.component';

const routes: Routes = [{ path: '', component: ConstructorPredComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstructorPredRoutingModule { }
