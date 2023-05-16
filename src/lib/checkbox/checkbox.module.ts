import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { FormsModule } from '@angular/forms';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';

@NgModule({
  declarations: [CheckboxComponent, CheckboxGroupComponent],
  imports: [CommonModule, FormsModule,],
  exports: [CheckboxComponent, CheckboxGroupComponent],
})
export class CheckboxModule {}
