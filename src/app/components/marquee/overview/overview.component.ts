import { Component } from '@angular/core';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicMarqueeExampleComponent } from '../_examples/basic-marquee-example/basic-marquee-example.component';
import { MarqueeReverseExampleComponent } from '../_examples/marquee-reverse-example/marquee-reverse-example.component';
import {
  MarqueePauseOnHoverExampleComponent
} from '../_examples/marquee-pause-on-hover-example/marquee-pause-on-hover-example.component';

@Component({
    selector: 'app-overview',
    imports: [
        PageComponent,
        PageContentDirective,
        PlaygroundComponent,
        BasicMarqueeExampleComponent,
        MarqueeReverseExampleComponent,
        MarqueePauseOnHoverExampleComponent
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
