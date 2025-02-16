import { Component } from '@angular/core';
import {
  PanelBodyComponent,
  PanelComponent,
  PanelFooterComponent,
  PanelHeaderComponent
} from '@elementar-ui/components';

@Component({
  selector: 'app-basic-panel-example',
  imports: [
    PanelBodyComponent,
    PanelFooterComponent,
    PanelHeaderComponent,
    PanelComponent
  ],
  templateUrl: './basic-panel-example.component.html',
  styleUrl: './basic-panel-example.component.scss'
})
export class BasicPanelExampleComponent {

}
