import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { DropdownPanel } from './dropmenu-panel';

@Component({
  selector: 'eg-dropmenu',
  host: {
    class: 'c-drop-menu'
  },
  templateUrl: './dropmenu.component.html',
  styleUrls: ['./dropmenu.component.scss'],
})
export class DropmenuComponent implements DropdownPanel {


  @ViewChild(TemplateRef) templateRef: TemplateRef<any> | any;
  @Output() closed = new EventEmitter<void>();

  constructor() {}
}
