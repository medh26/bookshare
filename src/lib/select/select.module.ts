import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import {SelectOptionComponent} from './select-option.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import {IconModule} from '../icon/icon.module';
import {DirectiveModule} from '../button/directive.module';



@NgModule({
  declarations: [
    SelectComponent,
    SelectOptionComponent
  ],
  exports: [
    SelectComponent,
    SelectOptionComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    IconModule,
    DirectiveModule
  ]
})
export class SelectModule { }
