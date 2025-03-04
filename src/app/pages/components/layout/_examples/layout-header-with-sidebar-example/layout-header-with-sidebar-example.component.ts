import { Component } from '@angular/core';
import {
  LayoutBodyComponent,
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutSidebarComponent
} from '@elementar-ui/components/layout';

@Component({
  selector: 'app-layout-header-with-sidebar-example',
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
