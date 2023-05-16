import {Directive, Input, HostListener, ChangeDetectorRef} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Directive({
  selector: '[appSort]'
})
export class SortDirective {
  @Input() data: any[] | any;
  @Input() sortBy: string | any;
  @Input() ascending: boolean | any;
  constructor(private changeDetectorRefs: ChangeDetectorRef) { }


  @HostListener('click') sort() {
    const arr= this.data.data.getValue();

    arr.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => {
      if (a[this.sortBy] < b[this.sortBy]) {
        return this.ascending ? -1 : 1;
      } else if (a[this.sortBy] > b[this.sortBy]) {
        return this.ascending ? 1 : -1;
      } else {
        return 0;
      }
    });
    this.data.data.next(arr);
  }

  refresh() {
    this.data.data.value.splice();
    return this.data;
  }
}
