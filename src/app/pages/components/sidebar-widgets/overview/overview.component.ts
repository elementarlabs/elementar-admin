import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { GoToPremiumComponent } from '@app/sidebar/_go-to-premium/go-to-premium.component';
import { UpgradeToProComponent } from '@app/sidebar/_upgrade-to-pro/upgrade-to-pro.component';
import { UpgradeNowComponent } from '@app/sidebar/_upgrade-now/upgrade-now.component';
import { UsedSpaceComponent } from '@app/sidebar/_used-space/used-space.component';
import {
  SidebarUsedSpaceExampleComponent
} from '../_examples/sidebar-used-space-example/sidebar-used-space-example.component';
import {
  SidebarUpgradeNowExampleComponent
} from '../_examples/sidebar-upgrade-now-example/sidebar-upgrade-now-example.component';
import {
  SidebarUpgradeToProExampleComponent
} from '../_examples/sidebar-upgrade-to-pro-example/sidebar-upgrade-to-pro-example.component';
import {
  SidebarGoToPremiumExampleComponent
} from '../_examples/sidebar-go-to-premium-example/sidebar-go-to-premium-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    GoToPremiumComponent,
    UpgradeToProComponent,
    UpgradeNowComponent,
    UsedSpaceComponent,
    SidebarUsedSpaceExampleComponent,
    SidebarUpgradeNowExampleComponent,
    SidebarUpgradeToProExampleComponent,
    SidebarGoToPremiumExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
