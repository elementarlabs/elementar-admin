import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { IconComponent } from '@elementar/components/icon';
import { HDividerComponent } from '@elementar/components/divider';
import { AvatarComponent } from '@elementar/components/avatar';
import {
  TabPanelAsideComponent,
  TabPanelAsideContentDirective, TabPanelBodyComponent, TabPanelComponent,
  TabPanelCustomItemComponent, TabPanelFooterComponent, TabPanelHeaderComponent,
  TabPanelItemComponent,
  TabPanelItemIconDirective, TabPanelNavComponent
} from '@elementar/components/tab-panel';

@Component({
  selector: 'app-tab-panel-compact-example',
  imports: [
    IconComponent,
    MatTooltip,
    HDividerComponent,
    AvatarComponent,
    TabPanelItemIconDirective,
    TabPanelItemComponent,
    TabPanelCustomItemComponent,
    TabPanelAsideContentDirective,
    TabPanelAsideComponent,
    TabPanelNavComponent,
    TabPanelFooterComponent,
    TabPanelBodyComponent,
    TabPanelHeaderComponent,
    TabPanelComponent
  ],
  templateUrl: './tab-panel-compact-example.component.html',
  styleUrl: './tab-panel-compact-example.component.scss'
})
export class TabPanelCompactExampleComponent {

}
