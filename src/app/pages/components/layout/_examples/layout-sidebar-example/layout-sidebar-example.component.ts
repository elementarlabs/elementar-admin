import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@components/layout/layout-body/layout-body.component';
import { LayoutComponent } from '@components/layout/layout/layout.component';
import { LayoutHeaderComponent } from '@components/layout/layout-header/layout-header.component';
import { LayoutSidebarComponent } from '@components/layout/layout-sidebar/layout-sidebar.component';

@Component({
  selector: 'app-layout-sidebar-example',
  standalone: true,
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent
  ],
  templateUrl: './layout-sidebar-example.component.html',
  styleUrl: './layout-sidebar-example.component.scss'
})
export class LayoutSidebarExampleComponent {

}
