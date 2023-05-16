import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { FetchPages } from './fetch.pages.pipe';
import {DirectiveModule} from '../button/directive.module';
import {IconModule} from '../icon/icon.module';
import {SelectModule} from '../select/select.module';



@NgModule({
  declarations: [
    PaginatorComponent,
    FetchPages
  ],
  exports: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    IconModule,
    SelectModule
  ]
})
export class PaginatorModule { }
