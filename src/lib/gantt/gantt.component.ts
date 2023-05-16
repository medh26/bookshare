import {Component, Input, OnInit} from '@angular/core';
import {configOptions} from './config-model';

@Component({
  selector: 'app-gantt',
  host: { class: 'c-gc__wrapper' },
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss']
})
export class GanttComponent implements OnInit{


  @Input() public options : configOptions | any;


  constructor() {



  }

  ngOnInit(): void {

  }


}
