import { Component } from '@angular/core';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  GoToPremiumWidgetExampleComponent
} from '../_examples/go-to-premium-widget-example/go-to-premium-widget-example.component';
import { ToolbarWidgetExampleComponent } from '../_examples/toolbar-widget-example/toolbar-widget-example.component';

@Component({
  standalone: true,
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    GoToPremiumWidgetExampleComponent,
    ToolbarWidgetExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
