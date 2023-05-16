import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataSortDirective} from './sort';



@NgModule({
  declarations: [
    DataSortDirective,
  ],
  exports: [
    DataSortDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class DataSortModule { }
