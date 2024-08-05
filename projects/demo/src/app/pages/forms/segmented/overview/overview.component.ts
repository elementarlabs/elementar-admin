import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { BasicSegmentedExampleComponent } from '../_examples/basic-segmented-example/basic-segmented-example.component';
import { SegmentedSizesExampleComponent } from '../_examples/segmented-sizes-example/segmented-sizes-example.component';
import {
  SegmentedDisabledExampleComponent
} from '../_examples/segmented-disabled-example/segmented-disabled-example.component';
import {
  SegmentedWithIconsExampleComponent
} from '../_examples/segmented-with-icons-example/segmented-with-icons-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import {
  SegmentedSimpleThemeExampleComponent
} from '../_examples/segmented-simple-theme-example/segmented-simple-theme-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicSegmentedExampleComponent,
    SegmentedSizesExampleComponent,
    SegmentedDisabledExampleComponent,
    SegmentedWithIconsExampleComponent,
    PageComponent,
    PageContentDirective,
    SegmentedSimpleThemeExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
