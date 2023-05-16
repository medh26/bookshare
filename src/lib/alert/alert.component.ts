import { Component, Inject } from '@angular/core';



export interface AlertComponentData {
  title: string
  message: string
  action?: string;
  level: string;
  icon: string;
}

@Component({
  selector: 'eg-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {


  constructor() { }

}
