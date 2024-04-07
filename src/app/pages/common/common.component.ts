import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '@components/layout/layout/layout.component';
import { LayoutBodyComponent } from '@components/layout/layout-body/layout-body.component';
import { LayoutSidebarComponent } from '@components/layout/layout-sidebar/layout-sidebar.component';
import { LayoutHeaderComponent } from '@components/layout/layout-header/layout-header.component';
import { LayoutTopbarComponent } from '@components/layout/layout-topbar/layout-topbar.component';
import { HeaderComponent } from '@app/header/header/header.component';
import { SidebarComponent } from '@app/sidebar/sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    LayoutBodyComponent,
    LayoutSidebarComponent,
    LayoutHeaderComponent,
    LayoutTopbarComponent
  ],
  templateUrl: './common.component.html'
})
export class CommonComponent {
}
