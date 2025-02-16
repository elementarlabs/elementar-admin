import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  TabPanelAsideComponent,
  TabPanelAsideContentDirective, TabPanelBodyComponent, TabPanelComponent,
  TabPanelItemComponent,
  TabPanelItemIconDirective,
  TabPanelItemTextComponent, TabPanelNavComponent
} from '@elementar-ui/components';
import {
  PanelBodyComponent,
  PanelComponent,
  PanelFooterComponent,
  PanelHeaderComponent
} from '@elementar-ui/components';

@Component({
  selector: 'app-tab-panel-with-panels-inside-example',
  imports: [
    MatIcon,
    TabPanelItemIconDirective,
    TabPanelItemTextComponent,
    TabPanelItemComponent,
    TabPanelAsideContentDirective,
    PanelHeaderComponent,
    PanelBodyComponent,
    PanelFooterComponent,
    PanelComponent,
    TabPanelAsideComponent,
    TabPanelNavComponent,
    TabPanelBodyComponent,
    TabPanelComponent
  ],
  templateUrl: './tab-panel-with-panels-inside-example.component.html',
  styleUrl: './tab-panel-with-panels-inside-example.component.scss'
})
export class TabPanelWithPanelsInsideExampleComponent {

}
