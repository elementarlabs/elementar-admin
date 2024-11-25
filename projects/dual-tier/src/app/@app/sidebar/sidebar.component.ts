import { Component } from '@angular/core';
import { HDividerComponent } from '@elementar/components/divider';
import { IconComponent } from '@elementar/components/icon';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { AvatarComponent, DicebearComponent } from '@elementar/components/avatar';
import {
  TabPanelAsideComponent,
  TabPanelAsideContentDirective,
  TabPanelBodyComponent, TabPanelComponent,
  TabPanelCustomItemComponent, TabPanelFooterComponent, TabPanelHeaderComponent,
  TabPanelItemComponent,
  TabPanelNavComponent
} from '@elementar/components/tab-panel';
import { PanelBodyComponent, PanelComponent, PanelHeaderComponent } from '@elementar/components/panel';

@Component({
  selector: 'app-sidebar',
  imports: [
    DicebearComponent,
    HDividerComponent,
    IconComponent,
    MatTab,
    MatTabGroup,
    MatTooltip,
    RouterLink,
    AvatarComponent,
    TabPanelItemComponent,
    TabPanelCustomItemComponent,
    TabPanelNavComponent,
    TabPanelBodyComponent,
    TabPanelHeaderComponent,
    TabPanelComponent,
    TabPanelAsideContentDirective,
    PanelHeaderComponent,
    PanelComponent,
    PanelBodyComponent,
    TabPanelAsideComponent,
    TabPanelAsideContentDirective,
    TabPanelFooterComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
