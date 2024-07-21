import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { EmrTabPanelModule } from '@elementar/components/tab-panel';
import { IconComponent } from '@elementar/components/icon';
import { EmrAvatarModule } from '@elementar/components/avatar';
import { HDividerComponent } from '@elementar/components/divider';

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
