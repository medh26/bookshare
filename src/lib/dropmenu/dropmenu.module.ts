import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropmenuComponent } from './dropmenu.component';
import { DropdownTriggerForDirective } from './dropdown-trigger-for.directive';

@NgModule({
  declarations: [DropmenuComponent, DropdownTriggerForDirective],
  imports: [CommonModule],
  exports: [
    DropdownTriggerForDirective,
    DropmenuComponent
  ]
})
export class DropmenuModule {}
