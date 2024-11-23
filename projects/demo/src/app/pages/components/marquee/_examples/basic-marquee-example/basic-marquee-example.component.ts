import { Component } from '@angular/core';
import { MarqueeComponent, MarqueeItemDirective } from '@elementar/components/marquee';

@Component({
    selector: 'app-basic-marquee-example',
    imports: [
        MarqueeComponent,
        MarqueeItemDirective
    ],
    templateUrl: './basic-marquee-example.component.html',
    styleUrl: './basic-marquee-example.component.scss'
})
export class BasicMarqueeExampleComponent {

}
