import { Component } from '@angular/core';
import { EmrAvatarModule, EmrTabPanelModule, HDividerComponent, IconComponent } from '@elementar/components';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-tab-panel-compact-example',
  standalone: true,
  imports: [
    EmrTabPanelModule,
    IconComponent,
    MatTooltip,
    EmrAvatarModule,
    HDividerComponent
  ],
  templateUrl: './tab-panel-compact-example.component.html',
  styleUrl: './tab-panel-compact-example.component.scss'
})
export class TabPanelCompactExampleComponent {

}
