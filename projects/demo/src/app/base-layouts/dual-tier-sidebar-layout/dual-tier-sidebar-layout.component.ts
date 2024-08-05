import { Component } from '@angular/core';
import { HeaderComponent } from '@app/header/header/header.component';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { EmrTabPanelModule } from '@elementar/components/tab-panel';
import { HDividerComponent } from '@elementar/components/divider';
import { IconComponent } from '@elementar/components/icon';
import {
  LayoutBodyComponent,
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutSidebarComponent
} from '@elementar/components/layout';
import { EmrPanelModule } from '@elementar/components/panel';
import { AvatarComponent } from '@elementar/components/avatar';

@Component({
  selector: 'app-dual-tier-sidebar-layout',
  standalone: true,
  imports: [
    EmrTabPanelModule,
    HDividerComponent,
    HeaderComponent,
    IconComponent,
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    MatTooltip,
    RouterLink,
    EmrPanelModule,
    MatTab,
    MatTabGroup,
    AvatarComponent
  ],
  templateUrl: './dual-tier-sidebar-layout.component.html',
  styleUrl: './dual-tier-sidebar-layout.component.scss'
})
export class DualTierSidebarLayoutComponent {
}
