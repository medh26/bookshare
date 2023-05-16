import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'eg-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent implements OnInit {
  @HostBinding('class') classes = 'c-divider';
  constructor() {}

  ngOnInit(): void {}
}
