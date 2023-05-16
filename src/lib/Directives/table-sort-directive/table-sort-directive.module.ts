import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SortDirective} from './sort.directive';
import {SortableHeaderDirective} from './sortable-header.directive';



@NgModule({
  declarations: [
    SortDirective,
    SortableHeaderDirective
  ],
  exports: [
    SortDirective,
    SortableHeaderDirective
  ],
  imports: [
    CommonModule
  ]
})
export class TableSortDirectiveModule { }
