import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, EventEmitter, Input,
  OnChanges,
  OnInit, Output,
  SimpleChanges, TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import {FetchPages} from './fetch.pages.pipe';
import {SelectItem} from '../public_api/selectitem';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  host: { class: 'c-paginator' },
  styleUrls: ['./paginator.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [FetchPages]
})
export class PaginatorComponent  implements OnInit, OnChanges {

  @Input() pageLinkSize: number = 5;
  @Input() alwaysShow: boolean = true;
  @Input() templateLeft: TemplateRef<any> | undefined;
  @Input() templateRight: TemplateRef<any> | undefined;
  @Input() dropdownAppendTo: any;
  @Input() currentPageReportTemplate: string = '{currentPage} of {totalPages}';
  @Input() showCurrentPageReport: boolean = true;
  @Input() showFirstLastIcon: boolean = true;
  @Input() totalRecords: number = 0;
  @Input() rows: number = 0;
  @Input() rowsPerPageOptions: any[] | undefined;
  @Input() showJumpToPageDropdown: boolean = true;
  @Input() showJumpToPageInput: boolean = true;
  @Input() showPageLinks: boolean = true;
  @Input() dropdownItemTemplate: TemplateRef<any> |any;
  @Output() onPageChange: EventEmitter<any> = new EventEmitter();

  pageLinks: number[] | undefined;

  pageItems: SelectItem[] | undefined;

  rowsPerPageItems: SelectItem[] | undefined;

  paginatorState: any;

  _first: number = 0;

  _page: number = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges(simpleChange: SimpleChanges): void {
    if (simpleChange['totalRecords']) {
      this.updatePageLinks();
      this.updatePaginatorState();
      this.updateFirst();
      this.updateRowsPerPageOptions();
    }

    if (simpleChange['first']) {
      this._first = simpleChange['first'].currentValue;
      this.updatePageLinks();
      this.updatePaginatorState();
    }

    if (simpleChange['rows']) {
      this.updatePageLinks();
      this.updatePaginatorState();
    }

    if (simpleChange['rowsPerPageOptions']) {
      this.updateRowsPerPageOptions();
    }
  }

  ngOnInit(): void {
    this.updatePaginatorState();
  }
  @Input() get first(): number {
    return this._first;
  }
  set first(val: number) {
    this._first = val;
  }

  updateRowsPerPageOptions() {
    if (this.rowsPerPageOptions) {
      this.rowsPerPageItems = [];
      for (let opt of this.rowsPerPageOptions) {
        if (typeof opt == 'object' && opt['showAll']) {
          this.rowsPerPageItems.unshift({ label: opt['showAll'], value: this.totalRecords });
        } else {
          this.rowsPerPageItems.push({ label: String(opt), value: opt });
        }
      }
    }
  }

  isFirstPage() {
    return this.getPage() === 0;
  }

  isLastPage() {
    return this.getPage() === this.getPageCount() - 1;
  }

  getPageCount() {
    return Math.ceil(this.totalRecords / this.rows);
  }

  calculatePageLinkBoundaries() {
    let numberOfPages = this.getPageCount(),
      visiblePages = Math.min(this.pageLinkSize, numberOfPages);

    //calculate range, keep current in middle if necessary
    let start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)),
      end = Math.min(numberOfPages - 1, start + visiblePages - 1);

    //check when approaching to last page
    var delta = this.pageLinkSize - (end - start + 1);
    start = Math.max(0, start - delta);

    return [start, end];
  }

  updatePageLinks() {
    this.pageLinks = [];
    let boundaries = this.calculatePageLinkBoundaries(),
      start = boundaries[0],
      end = boundaries[1];

    for (let i = start; i <= end; i++) {
      this.pageLinks.push(i + 1);
    }

    if (this.showJumpToPageDropdown) {
      this.pageItems = [];
      for (let i = 0; i < this.getPageCount(); i++) {
        this.pageItems.push({ label: String(i + 1), value: i });
      }
    }
  }

  changePage(p: number) {
    var pc = this.getPageCount();

    if (p >= 0 && p < pc) {
      this._first = this.rows * p;
      var state = {
        page: p,
        first: this.first,
        rows: this.rows,
        pageCount: pc
      };
      this.updatePageLinks();

      this.onPageChange.emit(state);
      this.updatePaginatorState();
    }
  }

  updateFirst() {
    const page = this.getPage();
    if (page > 0 && this.totalRecords && this.first >= this.totalRecords) {
      Promise.resolve(null).then(() => this.changePage(page - 1));
    }
  }

  getPage(): number {
    return Math.floor(this.first / this.rows);
  }

  changePageToFirst(event: { preventDefault: () => void; }) {
    if (!this.isFirstPage()) {
      this.changePage(0);
    }

    event.preventDefault();
  }

  changePageToPrev(event: { preventDefault: () => void; }) {
    this.changePage(this.getPage() - 1);
    event.preventDefault();
  }

  changePageToNext(event: { preventDefault: () => void; }) {
    this.changePage(this.getPage() + 1);
    event.preventDefault();
  }

  changePageToLast(event: { preventDefault: () => void; }) {
    if (!this.isLastPage()) {
      this.changePage(this.getPageCount() - 1);
    }

    event.preventDefault();
  }

  onPageLinkClick(event: { preventDefault: () => void; }, page: number) {
    this.changePage(page);
    event.preventDefault();
  }

  onRppChange(event: any) {
    this.changePage(this.getPage());
  }

  onPageDropdownChange(event: { value: number; }) {
    this.changePage(event.value);
  }

  updatePaginatorState() {
    this.paginatorState = {
      page: this.getPage(),
      pageCount: this.getPageCount(),
      rows: this.rows,
      first: this.first,
      totalRecords: this.totalRecords
    };
  }

  empty() {
    return this.getPageCount() === 0;
  }

  currentPage() {
    return this.getPageCount() > 0 ? this.getPage() + 1 : 0;
  }

  get currentPageReport() {
    return this.currentPageReportTemplate
      .replace('{currentPage}', String(this.currentPage()))
      .replace('{totalPages}', String(this.getPageCount()))
      .replace('{first}', String(this.totalRecords > 0 ? this._first + 1 : 0))
      .replace('{last}', String(Math.min(this._first + this.rows, this.totalRecords)))
      .replace('{rows}', String(this.rows))
      .replace('{totalRecords}', String(this.totalRecords));
  }

}
