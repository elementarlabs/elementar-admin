import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { GoToPremiumComponent } from '@app/sidebar/_go-to-premium/go-to-premium.component';
import { UpgradeToProComponent } from '@app/sidebar/_upgrade-to-pro/upgrade-to-pro.component';
import { UpgradeNowComponent } from '@app/sidebar/_upgrade-now/upgrade-now.component';
import { UsedSpaceComponent } from '@app/sidebar/_used-space/used-space.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    GoToPremiumComponent,
    UpgradeToProComponent,
    UpgradeNowComponent,
    UsedSpaceComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
