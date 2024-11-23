import { Component } from '@angular/core';
import { EmrPanelModule } from '@elementar/components/panel';
import { EmrTabPanelModule } from '@elementar/components/tab-panel';
import { HDividerComponent } from '@elementar/components/divider';
import { IconComponent } from '@elementar/components/icon';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { AvatarComponent, DicebearComponent } from '@elementar/components/avatar';

@Component({
    selector: 'app-sidebar',
    imports: [
        DicebearComponent,
        EmrPanelModule,
        EmrTabPanelModule,
        HDividerComponent,
        IconComponent,
        MatTab,
        MatTabGroup,
        MatTooltip,
        RouterLink,
        AvatarComponent
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
