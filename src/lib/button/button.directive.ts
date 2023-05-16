import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


export type DirectiveColor = 'default' | 'primary' | 'secondary' | 'tertiary'| 'destructive'| 'shallow'| 'hollow' | 'link';
export type DirectiveSize = 'small' | 'medium' | 'large' | 'xLarge';

const VARIATIONS = {
  color: {
    default: ['eg-btn'],
    primary: ['eg-btn-primary'],
    secondary: ['eg-btn-secondary'],
    tertiary: ['eg-btn-tertiary'],
    destructive: ['eg-btn-destructive'],
    shallow: ['eg-btn-shallow'],
    hollow: ['eg-btn-hollow'],
    link: ['eg-btn-link'],
  },
  size: {
    small: ['eg-btn--sm'],
    medium: ['eg-btn--medium'],
    large: ['eg-btn--large'],
    xLarge: ['eg-btn--x-large']
  }
}

@Directive({
  selector: '[egButton]',
  host: { directive: 'eg-ripple' }
})
export class ButtonDirective implements OnInit, OnChanges {


  @Input() color: DirectiveColor = 'default';
  @Input() size: DirectiveSize = 'medium';



  constructor(private elementRef: ElementRef<HTMLButtonElement>) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add('eg-btn');
    this.elementRef.nativeElement.classList.add(...VARIATIONS.color[this.color]);
    this.elementRef.nativeElement.classList.add(...VARIATIONS.size[this.size]);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
