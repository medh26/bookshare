import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  PlanflexRippleDirective } from './ripple.directive';



@NgModule({
  declarations: [
    PlanflexRippleDirective
  ],
  exports: [
    PlanflexRippleDirective
  ],
  imports: [
    CommonModule
  ]
})
export class RippleModule { }
