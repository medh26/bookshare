import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormFieldComponent} from './form-field.component';
import {InputRefDirective} from './input-ref.directive';

@NgModule({
  declarations: [
    FormFieldComponent,
    InputRefDirective,
  ],
  imports: [CommonModule],
  exports: [
    FormFieldComponent,
    InputRefDirective
  ],
})
export class FormFieldModule {}
