import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrilloMainComponent } from './pages/trillo-main/trillo-main.component';

const routes: Routes = [
  {
    path : '',
    component : TrilloMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrilloFlexboxRoutingModule { }
