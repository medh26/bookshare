import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  host: { class: 'l-side-nav' },
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  projects: any;

  ngOnInit() {
    this.projects = <any>[
      {
        url: '/alerts',
        title: 'Alerts',
      },
      {
        url: '/avatar',
        title: 'Avatar',
      },
      {
        url: '/buttons',
        title: 'Buttons',
      },
      {
        url: '/checkbox',
        title: 'Checkbox',
      },
      {
        url: '/date-picker',
        title: 'Date picker',
      },

      {
        url: '/drop-menu',
        title: 'Dropmenu',
      },
      {
        url: '/gantt',
        title: 'Gantt',
      },

      {
        url: '/select',
        title: 'Select',
      },
      {
        url: '/input',
        title: 'Text field',
      },
      {
        url: '/data-tables',
        title: 'Data table',
      },
    ]
  };
}
