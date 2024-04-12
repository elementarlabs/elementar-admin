import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components';
import { LayoutComponent } from '@elementar/components';
import { LayoutHeaderComponent } from '@elementar/components';
import { LayoutSidebarComponent } from '@elementar/components';
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
