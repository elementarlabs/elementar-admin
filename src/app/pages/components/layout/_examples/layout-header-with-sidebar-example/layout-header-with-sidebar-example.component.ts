import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@components/layout/layout-body/layout-body.component';
import { LayoutComponent } from '@components/layout/layout/layout.component';
import { LayoutHeaderComponent } from '@components/layout/layout-header/layout-header.component';
import { LayoutSidebarComponent } from '@components/layout/layout-sidebar/layout-sidebar.component';

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
