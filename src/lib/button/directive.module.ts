import { NgModule } from '@angular/core';
import { ButtonDirective } from './button.directive';
import { IconButtonDirective } from './icon-button.directive';




@NgModule({
    declarations: [
        ButtonDirective,
        IconButtonDirective,
    ],
    exports: [
        ButtonDirective,
        IconButtonDirective,
    ],

})
export class DirectiveModule { }
