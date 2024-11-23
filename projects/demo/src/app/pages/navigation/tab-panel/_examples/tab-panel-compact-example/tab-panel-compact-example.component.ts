import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { EmrTabPanelModule } from '@elementar/components/tab-panel';
import { IconComponent } from '@elementar/components/icon';
import { HDividerComponent } from '@elementar/components/divider';
import { AvatarComponent } from '@elementar/components/avatar';

@Component({
    selector: 'app-tab-panel-compact-example',
    imports: [
        EmrTabPanelModule,
        IconComponent,
        MatTooltip,
        HDividerComponent,
        AvatarComponent
    ],
    templateUrl: './tab-panel-compact-example.component.html',
    styleUrl: './tab-panel-compact-example.component.scss'
})
export class TabPanelCompactExampleComponent {

}
