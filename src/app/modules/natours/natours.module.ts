import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NatoursComponent } from './pages/natours/natours.component';
import { NatoursRoutingModule } from './natours.routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    NatoursComponent
  ],
  imports: [
    CommonModule,
    NatoursRoutingModule
  ]
})
export class NatoursModule { }
