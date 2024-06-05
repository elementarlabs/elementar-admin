import { Component } from '@angular/core';
import {
  EmrAvatarModule,
  EmrTabPanelModule,
  HDividerComponent,
  IconComponent,
  LayoutBodyComponent, LayoutComponent, LayoutHeaderComponent, LayoutSidebarComponent
} from '@elementar/components';
import { HeaderComponent } from '@app/header/header/header.component';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dual-tier-sidebar-layout',
  standalone: true,
  imports: [
    EmrAvatarModule,
    EmrTabPanelModule,
    HDividerComponent,
    HeaderComponent,
    IconComponent,
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    MatTooltip,
    RouterLink
  ],
  templateUrl: './dual-tier-sidebar-layout.component.html',
  styleUrl: './dual-tier-sidebar-layout.component.scss'
})
export class DualTierSidebarLayoutComponent {

}
