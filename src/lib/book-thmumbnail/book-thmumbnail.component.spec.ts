import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookThmumbnailComponent } from './book-thmumbnail.component';

describe('BookThmumbnailComponent', () => {
  let component: BookThmumbnailComponent;
  let fixture: ComponentFixture<BookThmumbnailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookThmumbnailComponent]
    });
    fixture = TestBed.createComponent(BookThmumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
