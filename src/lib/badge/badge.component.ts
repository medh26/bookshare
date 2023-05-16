import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


export type DirectiveColor = 'gray' | 'red' | 'yellow' | 'green'| 'blue' | 'brand' | 'none';
export type DirectiveSize = 'small' | 'large' ;

const VARIATIONS = {
  color: {
    gray: ['c-badge'],
    red: ['c-badge-red'],
    yellow: ['c-badge-yellow'],
    green: ['c-badge-green'],
    blue: ['c-badge-blue'],
    brand: ['c-badge-primary'],
    none: ['c-badge-none'],
  },
  size: {
    small: ['c-badge--sm'],
    large: ['c-badge--lg'],
  },
}

@Component({
  selector: 'eg-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit, OnChanges {

  @Input() color: DirectiveColor = 'gray';
  @Input() size: DirectiveSize = 'small';
  @Input() invert: boolean = false;
  @Input() removable: boolean = false;

  constructor(private elementRef: ElementRef<HTMLButtonElement>) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add('c-badge');
    this.elementRef.nativeElement.classList.add(...VARIATIONS.color[this.color]);
    this.elementRef.nativeElement.classList.add(...VARIATIONS.size[this.size]);

    if (this.invert) {
      this.elementRef.nativeElement.classList.add('invert-true');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
