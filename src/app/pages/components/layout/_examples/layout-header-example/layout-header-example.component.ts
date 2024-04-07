import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@components/layout/layout-body/layout-body.component';
import { LayoutComponent } from '@components/layout/layout/layout.component';
import { LayoutHeaderComponent } from '@components/layout/layout-header/layout-header.component';
import { LayoutSidebarComponent } from '@components/layout/layout-sidebar/layout-sidebar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@app/header/header/header.component';
import { SidebarComponent } from '@app/sidebar/sidebar/sidebar.component';

@Component({
  selector: 'app-layout-header-example',
  standalone: true,
  imports: [
    HeaderComponent,
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './layout-header-example.component.html',
  styleUrl: './layout-header-example.component.scss'
})
export class LayoutHeaderExampleComponent {

}
