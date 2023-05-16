import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchComponent } from './book-search.component';
import {BookSearchRoutingModule} from "./book-search-routing.module";
import {HeaderModule} from "../../../lib/header/header.module";
import {FormFieldModule} from "../../../lib/form-field/form-field.module";
import {IconModule} from "../../../lib/icon/icon.module";
import {BadgeModule} from "../../../lib/badge/badge.module";
import {DirectiveModule} from "../../../lib/button/directive.module";
import {BookThmumbnailModule} from "../../../lib/book-thmumbnail/book-thmumbnail.module";



@NgModule({
  declarations: [
    BookSearchComponent
  ],
  imports: [
    CommonModule,
    BookSearchRoutingModule,
    HeaderModule,
    FormFieldModule,
    IconModule,
    BadgeModule,
    DirectiveModule,
    BookThmumbnailModule
  ]
})
export class BookSearchModule { }
