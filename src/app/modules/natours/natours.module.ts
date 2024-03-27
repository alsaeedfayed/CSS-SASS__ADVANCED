import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NatoursComponent } from './pages/natours/natours.component';
import { NatoursRoutingModule } from './natours.routing.module';
import { GridFloatsComponent } from "./components/grid-floats/grid-floats.component";



@NgModule({
    declarations: [
        HeaderComponent,
        NatoursComponent,
        GridFloatsComponent
    ],
    imports: [
        CommonModule,
        NatoursRoutingModule,


    ]
})
export class NatoursModule { }
