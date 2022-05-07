import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinsComponent } from './wins.component';

const routes: Routes = [{ path: '', component: WinsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WinsRoutingModule { }
