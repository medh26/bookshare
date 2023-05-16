import {
  Component, EventEmitter, Input, OnChanges, Output, SimpleChanges

} from '@angular/core';

@Component({
  selector: 'eg-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
})
export class CheckboxGroupComponent implements OnChanges {

  @Input() selected: string[] = [];
  @Input() options: string[] = [];
  @Input() disabled = false;

  _values: boolean[] = [];

  @Output() changed = new EventEmitter<string[]>();

  ngOnChanges(changes: SimpleChanges) {
    this._values = this.options.map( option => this.selected.some(v => v === option) );
  }

  valueChange(i: number, $event: any) {
    this._values[i] = $event;
    const _newList: string[] = [];
    this._values.forEach( (_value, i) => {
      if (_value) {
        _newList.push(this.options[i]);
      }
    })
    this.changed.emit(_newList);
  }
}
