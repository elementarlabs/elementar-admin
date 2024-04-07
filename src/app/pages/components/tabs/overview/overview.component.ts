import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicTabsExampleComponent } from '../_examples/basic-tabs-example/basic-tabs-example.component';
import {
  TabsWithAlignedLabelsExampleComponent
} from '../_examples/tabs-with-aligned-labels-example/tabs-with-aligned-labels-example.component';
import {
  TabsWithCustomLabelTemplateExampleComponent
} from '../_examples/tabs-with-custom-label-template-example/tabs-with-custom-label-template-example.component';
import {
  TabsWithHeadersOnTheBottomExampleComponent
} from '../_examples/tabs-with-headers-on-the-bottom-example/tabs-with-headers-on-the-bottom-example.component';
import { PaginatedTabsExampleComponent } from '../_examples/paginated-tabs-example/paginated-tabs-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicTabsExampleComponent,
    TabsWithAlignedLabelsExampleComponent,
    TabsWithCustomLabelTemplateExampleComponent,
    TabsWithHeadersOnTheBottomExampleComponent,
    PaginatedTabsExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
