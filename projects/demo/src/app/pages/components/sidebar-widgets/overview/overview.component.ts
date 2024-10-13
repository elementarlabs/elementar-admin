import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
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
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import {
  GoToPremiumComponent,
  UpgradeNowComponent,
  UpgradeToProComponent,
  UsedSpaceComponent
} from '@elementar/shared/sidebar';

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
