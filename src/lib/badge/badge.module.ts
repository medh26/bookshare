import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';
import { BadgeDirective } from './badge.directive';
import {IconModule} from '../icon/icon.module';

@NgModule({
  declarations: [BadgeComponent, BadgeDirective],
  imports: [CommonModule, IconModule],
  exports: [
    BadgeComponent,
    BadgeDirective
  ]
})
export class BadgeModule {}
