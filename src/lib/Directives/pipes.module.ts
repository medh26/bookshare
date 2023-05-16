import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataSortPipe} from './data-sort.pipe';


@NgModule({
  declarations: [
   DataSortPipe
  ],
  exports: [
    DataSortPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class DataSortModule { }
