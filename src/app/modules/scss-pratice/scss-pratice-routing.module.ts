import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScssPractiseComponent } from './components/scss-practise/scss-practise.component';

const routes: Routes = [
  {path : '' ,
  component : ScssPractiseComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScssPraticeRoutingModule { }
