import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { DirectiveModule } from "../directive";
import {TranslateModule} from "@ngx-translate/core";
import {DirectiveModule} from '../button/directive.module';

@NgModule({
  declarations: [AlertComponent],
    imports: [CommonModule, DirectiveModule, TranslateModule, DirectiveModule],
})
export class AlertModule {}
