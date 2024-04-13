import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrilloFlexboxRoutingModule } from './trillo-flexbox-routing.module';
import { TrilloMainComponent } from './pages/trillo-main/trillo-main.component';
import { PracticeFlexBoxComponent } from './components/practice-flex-box/practice-flex-box.component';
import { HeaderTrilloComponent } from './components/header-trillo/header-trillo.component';
import { SidebarTrilloComponent } from './components/sidebar-trillo/sidebar-trillo.component';
import { MainTrilloComponent } from './components/main-trillo/main-trillo.component';


@NgModule({
  declarations: [
    TrilloMainComponent,
    PracticeFlexBoxComponent,
    HeaderTrilloComponent,
    SidebarTrilloComponent,
    MainTrilloComponent
  ],
  imports: [
    CommonModule,
    TrilloFlexboxRoutingModule
  ]
})
export class TrilloFlexboxModule { }
