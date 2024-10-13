import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  LayoutBodyComponent,
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutSidebarComponent
} from '@elementar/components/layout';
import { HeaderComponent } from '@app/header/header.component';
import { SidebarComponent } from '@app/sidebar/sidebar.component';

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent
  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss'
})
export class CommonComponent {

}
