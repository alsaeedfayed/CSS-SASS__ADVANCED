import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gridMainModule } from './grid.routing.module';
import { TestGriddComponent } from './components/test-gridd/test-gridd.component';



@NgModule({
  declarations: [
    TestGriddComponent
  ],
  imports: [
    CommonModule,
    gridMainModule
  ],
  exports: [TestGriddComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CssGridModule { }
