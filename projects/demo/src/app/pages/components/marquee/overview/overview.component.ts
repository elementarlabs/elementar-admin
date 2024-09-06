import { Component } from '@angular/core';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { BasicMarqueeExampleComponent } from '../_examples/basic-marquee-example/basic-marquee-example.component';
import { MarqueeReverseExampleComponent } from '../_examples/marquee-reverse-example/marquee-reverse-example.component';
import {
  MarqueePauseOnHoverExampleComponent
} from '../_examples/marquee-pause-on-hover-example/marquee-pause-on-hover-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
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
