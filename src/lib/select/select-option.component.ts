import {Component, ElementRef, HostBinding, HostListener, Input, ViewChild} from '@angular/core';
import {SelectComponent} from './select.component';
import {SelectDropdownService} from './select-dropdown.service';

@Component({
  selector:  'eg-select-option',
  template: `<span #option><ng-content ></ng-content></span>`,
  host: {
    'role':  'listbox',
    '[attr.aria-label]':  'value',
    class: 'c-menu-item'
  }
})
export  class  SelectOptionComponent {
  @Input()
  public value!: any;

  @HostBinding('class.disabled')
  @Input()
  public disabled = false;

  @HostBinding('class.active')
  public active = false;

  private select: SelectComponent;

  @ViewChild('option')
  private option!: ElementRef;

  constructor(private dropdownService: SelectDropdownService) {
    this.select = this.dropdownService.getSelect();
  }

  @HostListener('click', ['$event'])
  public onClick(event: UIEvent): void {
    event.preventDefault();
    if (!this.disabled) {
      this.select.selectOption(this);
    }
  }

  public getOptionElement(): any {
    return this.option.nativeElement;
  }

  public setActiveStyles(): void {
    this.active = true;
  }

  public setInactiveStyles(): void {
    this.active = false;
  }

  public scrollIntoView(): void {
    this.option.nativeElement.scrollIntoView({ block: 'center' });
  }
}
