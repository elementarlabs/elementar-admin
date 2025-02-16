import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  TabPanelAsideComponent,
  TabPanelAsideContentDirective, TabPanelBodyComponent, TabPanelComponent,
  TabPanelItemComponent,
  TabPanelItemIconDirective,
  TabPanelItemTextComponent, TabPanelNavComponent
} from '@elementar-ui/components';

@Component({
  selector: 'app-basic-tab-panel-example',
  imports: [
    MatIcon,
    TabPanelItemIconDirective,
    TabPanelItemComponent,
    TabPanelItemTextComponent,
    TabPanelAsideContentDirective,
    TabPanelAsideComponent,
    TabPanelNavComponent,
    TabPanelBodyComponent,
    TabPanelComponent
  ],
  templateUrl: './basic-tab-panel-example.component.html',
  styleUrl: './basic-tab-panel-example.component.scss'
})
export class BasicTabPanelExampleComponent {

}
