import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScssPraticeRoutingModule } from './scss-pratice-routing.module';
import { ScssPractiseComponent } from './components/scss-practise/scss-practise.component';


@NgModule({
  declarations: [
    ScssPractiseComponent
  ],
  imports: [
    CommonModule,
    ScssPraticeRoutingModule
  ]
})
export class ScssPraticeModule { }
