import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '@elementar/components';
import { LayoutBodyComponent } from '@elementar/components';
import { LayoutSidebarComponent } from '@elementar/components';
import { LayoutHeaderComponent } from '@elementar/components';
import { LayoutTopbarComponent } from '@elementar/components';
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
