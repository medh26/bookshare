import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GanttComponent} from './gantt.component';
import {AvatarModule} from '../avatar/avatar.module';
import { GanttCalenderComponent } from './gantt-calender/gantt-calender.component';



@NgModule({
  declarations: [
    GanttComponent,
    GanttCalenderComponent
  ],
  exports: [
    GanttComponent
  ],
  imports: [
    CommonModule,
    AvatarModule
  ]
})
export class GanttModule { }
