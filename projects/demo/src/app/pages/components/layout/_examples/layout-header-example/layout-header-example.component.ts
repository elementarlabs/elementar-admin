import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components/layout';
import { LayoutComponent } from '@elementar/components/layout';
import { LayoutHeaderComponent } from '@elementar/components/layout';
import { LayoutSidebarComponent } from '@elementar/components/layout';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@demo/app/header/header.component';
import { SidebarComponent } from '@demo/app/sidebar/sidebar.component';

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
