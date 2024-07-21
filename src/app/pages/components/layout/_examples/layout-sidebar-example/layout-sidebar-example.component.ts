import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components/layout';
import { LayoutComponent } from '@elementar/components/layout';
import { LayoutHeaderComponent } from '@elementar/components/layout';
import { LayoutSidebarComponent } from '@elementar/components/layout';

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
