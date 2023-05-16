import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


export type DirectiveColor = 'gray' | 'red' | 'yellow' | 'green'| 'blue' | 'brand';
export type DirectiveSize = 'small' | 'large' ;

const VARIATIONS = {
  color: {
    gray: ['c-badge'],
    red: ['c-badge-red'],
    yellow: ['c-badge-yellow'],
    green: ['c-badge-green'],
    blue: ['c-badge-blue'],
    brand: ['c-badge-primary'],
  },
  size: {
    small: ['c-badge--sm'],
    large: ['c-badge--lg'],
  },
}

@Directive({
  selector: '[egBadge]'
})
export class BadgeDirective implements OnInit, OnChanges {


  @Input() color: DirectiveColor = 'gray';
  @Input() size: DirectiveSize = 'small';
  @Input() invert: boolean = false;



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
