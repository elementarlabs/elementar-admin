import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar-ui/components';
import { LayoutComponent } from '@elementar-ui/components';
import { LayoutHeaderComponent } from '@elementar-ui/components';
import { LayoutSidebarComponent } from '@elementar-ui/components';

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
