import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components';
import { LayoutComponent } from '@elementar/components';
import { LayoutHeaderComponent } from '@elementar/components';
import { LayoutSidebarComponent } from '@elementar/components';

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
