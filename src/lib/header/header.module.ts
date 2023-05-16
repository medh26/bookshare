import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {DirectiveModule} from "../button/directive.module";
import {FormFieldModule} from "../form-field/form-field.module";
import {IconModule} from "../icon/icon.module";



@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
  imports: [
    CommonModule,
    DirectiveModule,
    FormFieldModule,
    IconModule
  ]
})
export class HeaderModule { }
