import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttCalenderComponent } from './gantt-calender.component';

describe('GanttCalenderComponent', () => {
  let component: GanttCalenderComponent;
  let fixture: ComponentFixture<GanttCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanttCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanttCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
