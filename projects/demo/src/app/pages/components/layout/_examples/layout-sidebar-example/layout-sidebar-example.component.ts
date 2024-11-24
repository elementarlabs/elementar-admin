import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components/layout';
import { LayoutComponent } from '@elementar/components/layout';
import { LayoutSidebarComponent } from '@elementar/components/layout';

@Component({
  selector: 'app-layout-sidebar-example',
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutSidebarComponent
  ],
  templateUrl: './layout-sidebar-example.component.html',
  styleUrl: './layout-sidebar-example.component.scss'
})
export class LayoutSidebarExampleComponent {

}
