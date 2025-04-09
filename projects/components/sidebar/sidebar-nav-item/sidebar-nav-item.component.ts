import { Component } from '@angular/core';

@Component({
  selector: 'emr-sidebar-nav-item,[emr-sidebar-nav-item]',
  exportAs: 'emr-sidebar-nav-item',
  imports: [],
  templateUrl: './sidebar-nav-item.component.html',
  styleUrl: './sidebar-nav-item.component.scss',
  host: {
    'class': 'emr-sidebar-nav-item',
  }
})
export class SidebarNavItemComponent {

}
