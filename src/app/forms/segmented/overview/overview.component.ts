import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicSegmentedExampleComponent } from '../_examples/basic-segmented-example/basic-segmented-example.component';
import { SegmentedSizesExampleComponent } from '../_examples/segmented-sizes-example/segmented-sizes-example.component';
import {
  SegmentedDisabledExampleComponent
} from '../_examples/segmented-disabled-example/segmented-disabled-example.component';
import {
  SegmentedWithIconsExampleComponent
} from '../_examples/segmented-with-icons-example/segmented-with-icons-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import {
  SegmentedIconsOnlyExampleComponent
} from '../_examples/segmented-icons-only-example/segmented-icons-only-example.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
    selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicSegmentedExampleComponent,
    SegmentedSizesExampleComponent,
    SegmentedDisabledExampleComponent,
    SegmentedWithIconsExampleComponent,
    PageComponent,
    PageContentDirective,
    SegmentedIconsOnlyExampleComponent,
    MatTab,
    MatTabGroup
  ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
