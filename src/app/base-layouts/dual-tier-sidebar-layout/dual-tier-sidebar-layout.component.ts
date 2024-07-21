import { Component } from '@angular/core';
import { HeaderComponent } from '@app/header/header/header.component';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { EmrAvatarModule } from '@elementar/components/avatar';
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
    RouterLink,
    EmrPanelModule,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './dual-tier-sidebar-layout.component.html',
  styleUrl: './dual-tier-sidebar-layout.component.scss'
})
export class DualTierSidebarLayoutComponent {
}
