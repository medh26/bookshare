import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookThmumbnailComponent } from './book-thmumbnail.component';



@NgModule({
    declarations: [
        BookThmumbnailComponent
    ],
    exports: [
        BookThmumbnailComponent
    ],
    imports: [
        CommonModule
    ]
})
export class BookThmumbnailModule { }
