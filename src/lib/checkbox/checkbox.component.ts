import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { CheckboxGroupComponent } from "./checkbox-group/checkbox-group.component";

@Component({
  selector: 'eg-checkbox',
  host: { class: 'c-checkbox__input' },
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent implements ControlValueAccessor {

  @Input() id: string | number = '';
  @Input() name: string = '';
  @Input() disabled = false;
  @Input() checked = false;

  @Output() changeSelection = new EventEmitter<boolean>();

  @ViewChild('cbxLabel') cbxLabel: ElementRef | undefined;

  _checkboxGroup: CheckboxGroupComponent | undefined;

  /**
   * Holds the current value of the slider
   */
  _value = false;
  set value(checked: boolean) {
    this._value = checked;
    this.onChange(checked);
    this.onTouched();
  }
  get value(): boolean {
    return this._value;
  }

  get label(): string {
    return `${this.id}`;
  }

  /**
   * Invoked when the model has been changed
   */
  onChange: (_: any) => void = (_: any) => {};

  /**
   * Invoked when the model has been touched
   */
  onTouched: () => void = () => {};

  ///////////////
  // OVERRIDES //
  ///////////////

  /**
   * Writes a new item to the element.
   * @param value the value
   */
  writeValue(value: boolean): void {
    this.value = value;
  }

  /**
   * Registers a callback function that should be called when the control's value changes in the UI.
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registers a callback function that should be called when the control receives a blur event.
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  init(checkboxGroup: CheckboxGroupComponent, value?: boolean) {
    this._checkboxGroup = checkboxGroup;
    if (value !== undefined) {
      this.writeValue(value);
    }
  }

  onChangeSelection(event: boolean) {
    this.value = event;
    this.changeSelection.emit(event);
    this.checked = this.value;
  }
}
