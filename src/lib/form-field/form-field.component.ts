import {Component, ContentChild, HostBinding, Input} from '@angular/core';
import {InputRefDirective} from './input-ref.directive';

@Component({
  selector: 'app-form-field',
  host: {class: 'eg-input'},
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

  @ContentChild(InputRefDirective) _egInput: InputRefDirective | undefined;
  //
  @HostBinding("class.eg-focus")
  get focus() {
    return this._egInput ? this._egInput.focus : false;
  }



}
