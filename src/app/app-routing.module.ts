import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path : 'natours',
    loadChildren : () => import('./modules/natours/natours.module').then((m) => m.NatoursModule)
  },
  {
    path :'scss-pratice',
    loadChildren : () => import('./modules/scss-pratice/scss-pratice.module').then((m) => m.ScssPraticeModule)
  },
  {
    path : 'trillo',
    loadChildren : () => import('./modules/trillo-flexbox/trillo-flexbox.module').then((m) => m.TrilloFlexboxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
