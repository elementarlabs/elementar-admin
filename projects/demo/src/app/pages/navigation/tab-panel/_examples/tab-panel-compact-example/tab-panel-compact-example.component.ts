import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { IconComponent } from '@elementar-ui/components/icon';
import { HorizontalDividerComponent } from '@elementar-ui/components/divider';
import { AvatarComponent } from '@elementar-ui/components/avatar';
import {
  TabPanelAsideComponent,
  TabPanelAsideContentDirective, TabPanelBodyComponent, TabPanelComponent,
  TabPanelCustomItemComponent, TabPanelFooterComponent, TabPanelHeaderComponent,
  TabPanelItemComponent,
  TabPanelItemIconDirective, TabPanelNavComponent
} from '@elementar-ui/components/tab-panel';

@Component({
  selector: 'app-tab-panel-compact-example',
  imports: [
    IconComponent,
    MatTooltip,
    HorizontalDividerComponent,
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
