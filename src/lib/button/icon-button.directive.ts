import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';


export type DirectiveColor = 'default' | 'primary' | 'secondary' | 'tertiary'| 'destructive'| 'shallow'| 'hollow' | 'link';
export type DirectiveSize = 'small' | 'medium' | 'large' | 'xLarge';

const VARIATIONS = {
  color: {
    default: ['eg-icon-btn'],
    primary: ['eg-btn-primary'],
    secondary: ['eg-btn-secondary'],
    tertiary: ['eg-btn-tertiary'],
    destructive: ['eg-btn-destructive'],
    shallow: ['eg-btn-shallow'],
    hollow: ['eg-btn-hollow'],
    link: ['eg-icon-btn']
  },
  size: {
    small: ['eg-icon-btn--sm'],
    medium: ['eg-icon-btn--medium'],
    large: ['eg-icon-btn--large'],
    xLarge: ['eg-icon-btn--x-large']
  }
}

@Directive({
  selector: '[egIconButton]'
})
export class IconButtonDirective implements OnInit, OnChanges {

  @HostBinding('class') classes = 'eg-icon-btn';


  @Input() color: DirectiveColor = 'default';
  @Input() size: DirectiveSize = 'medium';

  constructor(private elementRef: ElementRef<HTMLButtonElement>) { }

  ngOnInit(): void {

    this.elementRef.nativeElement.classList.add(...VARIATIONS.color[this.color]);
    this.elementRef.nativeElement.classList.add(...VARIATIONS.size[this.size]);
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
}
