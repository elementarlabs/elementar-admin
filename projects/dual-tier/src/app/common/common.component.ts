import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  LayoutBodyComponent,
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutSidebarComponent
} from '@elementar/components/layout';
import { AvatarComponent } from '@elementar/components/avatar';
import { EmrPanelModule } from '@elementar/components/panel';
import { EmrTabPanelModule } from '@elementar/components/tab-panel';
import { HDividerComponent } from '@elementar/components/divider';
import { IconComponent } from '@elementar/components/icon';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatTooltip } from '@angular/material/tooltip';
import { SidebarComponent } from '../@app/sidebar/sidebar.component';
import { HeaderComponent } from '../@app/header/header.component';

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    SidebarComponent,
    AvatarComponent,
    EmrPanelModule,
    EmrTabPanelModule,
    HDividerComponent,
    IconComponent,
    MatTab,
    MatTabGroup,
    MatTooltip,
    RouterLink
  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss'
})
export class CommonComponent {

}
