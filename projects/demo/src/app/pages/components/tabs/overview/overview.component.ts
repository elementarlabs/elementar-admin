import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
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
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { SortableTabsExampleComponent } from '../_examples/sortable-tabs-example/sortable-tabs-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicTabsExampleComponent,
    TabsWithAlignedLabelsExampleComponent,
    TabsWithCustomLabelTemplateExampleComponent,
    TabsWithHeadersOnTheBottomExampleComponent,
    PaginatedTabsExampleComponent,
    PageComponent,
    PageContentDirective,
    SortableTabsExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
