import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planflex-menu-item',
  host: { class: 'c-menu-item', directive: 'planflex-ripple' },
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
