import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components';
import { LayoutComponent } from '@elementar/components';
import { LayoutHeaderComponent } from '@elementar/components';
import { LayoutSidebarComponent } from '@elementar/components';

@Component({
  selector: 'app-layout-header-with-sidebar-example',
  standalone: true,
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent
  ],
  templateUrl: './layout-header-with-sidebar-example.component.html',
  styleUrl: './layout-header-with-sidebar-example.component.scss'
})
export class LayoutHeaderWithSidebarExampleComponent {

}
