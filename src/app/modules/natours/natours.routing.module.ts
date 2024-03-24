import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NatoursComponent } from './pages/natours/natours.component';

const routes: Routes = [
  {
    path: '',
    component: NatoursComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NatoursRoutingModule { }
