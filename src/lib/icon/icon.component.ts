import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'eg-icon',
  host: { class: 'eg-icon' },
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input()icon : any;

  constructor(private el: ElementRef) {}



  ngOnInit() {

  }

}
