import { BooleanInput } from '@angular/cdk/coercion';
import {Directive, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core'
import * as ɵngcc0 from '@angular/core';
import { SortDirection } from './sort-direction';
import { Subject } from 'rxjs';

export interface DataSortable {
  /** The id of the column being sorted. */
  id: string;
  /** Starting sort direction. */
  start: 'asc' | 'desc';
  /** Whether to disable clearing the sorting state. */
  disableClear: boolean;
}
export interface Sort {
  /** The id of the column being sorted. */
  active: string;
  /** The sort direction. */
  direction: SortDirection;
}

declare class DataSortBase {
}
@Directive({
  selector: '[DataSort]'
})
export declare class DataSortDirective implements  OnChanges, OnDestroy, OnInit {

  sortables: Map<string, DataSortable>;

  readonly _stateChanges: Subject<void>;

  active: string;

  start: 'asc' | 'desc';

  get direction(): SortDirection;
  set direction(direction: SortDirection);
  private _direction;

  readonly sortChange: EventEmitter<Sort>;

  register(sortable: DataSortable): void;

  deregister(sortable: DataSortable): void;

  sort(sortable: DataSortable): void;

  getNextSortDirection(sortable: DataSortable): SortDirection;

  ngOnChanges(changes: SimpleChanges): void;

  ngOnDestroy(): void;

  ngOnInit(): void;

  static ngAcceptInputType_disableClear: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;
}
