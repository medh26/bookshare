import {Component, Input, OnInit, Output, TemplateRef, EventEmitter, Inject, LOCALE_ID,} from '@angular/core';
import {configOptions} from '../config-model';
import * as moment from 'moment';
const days:any[] = [];
@Component({
  selector: 'app-gantt-calender',
  host: { class: 'c-gc__chart-calendar' },
  templateUrl: './gantt-calender.component.html',
  styleUrls: ['./gantt-calender.component.scss']
})
export class GanttCalenderComponent implements OnInit{
  @Input() public dyasOptions : configOptions | any;


  private startDate: any;
  private endDate: any;
  numDays = 0;

  daysOfMonth : string[] = [];



  constructor() {}

  ngOnInit(): void {
    console.log(this.dyasOptions)
    this.startDate = new Date(2021, 0, 1) ;
    this.endDate = new Date(2022, 1, 1);
    this.getDaysInRange(this.startDate, this.endDate);
    console.log("daysOfMonth");
    console.log(this.daysOfMonth);
  }

  getDaysInRange(startDate: any, endDate: any) {

    for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
      this.daysOfMonth.push(d.toDateString().split(' '));
    }
    return days;
  }


}


