import { Component } from '@angular/core';
import {
  GoToPremiumWidgetExampleComponent
} from '../_examples/go-to-premium-widget-example/go-to-premium-widget-example.component';
import { ToolbarWidgetExampleComponent } from '../_examples/toolbar-widget-example/toolbar-widget-example.component';
import {
  ToolbarAWidgetExampleComponent
} from '../_examples/toolbar-a-widget-example/toolbar-a-widget-example.component';
import {
  UpgradeNowWidgetExampleComponent
} from '../_examples/upgrade-now-widget-example/upgrade-now-widget-example.component';
import {
  UpgradeToProWidgetExampleComponent
} from '../_examples/upgrade-to-pro-widget-example/upgrade-to-pro-widget-example.component';
import {
  UsedSpaceWidgetExampleComponent
} from '../_examples/used-space-widget-example/used-space-widget-example.component';
import { PageComponent } from '../../../_meta/page/page.component';
import { PageContentDirective } from '../../../_meta/page/page-content.directive';
import { PlaygroundComponent } from '../../../_meta/playground/playground.component';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    GoToPremiumWidgetExampleComponent,
    ToolbarWidgetExampleComponent,
    ToolbarAWidgetExampleComponent,
    UpgradeNowWidgetExampleComponent,
    UpgradeToProWidgetExampleComponent,
    UsedSpaceWidgetExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
