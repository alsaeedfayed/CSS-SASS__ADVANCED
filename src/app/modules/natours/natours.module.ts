import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NatoursComponent } from './pages/natours/natours.component';
import { NatoursRoutingModule } from './natours.routing.module';
import { GridFloatsComponent } from "./components/grid-floats/grid-floats.component";
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { TourComponent } from './components/tour/tour.component';
import { StoriesComponent } from './components/stories/stories.component';
import { BookNowComponent } from './components/book-now/book-now.component';



@NgModule({
    declarations: [
        HeaderComponent,
        NatoursComponent,
        GridFloatsComponent,
        AboutComponent,
        FeaturesComponent,
        TourComponent,
        StoriesComponent,
        BookNowComponent
    ],
    imports: [
        CommonModule,
        NatoursRoutingModule,


    ]
})
export class NatoursModule { }
