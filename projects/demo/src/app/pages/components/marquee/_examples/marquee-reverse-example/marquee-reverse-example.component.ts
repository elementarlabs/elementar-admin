import { Component } from '@angular/core';
import { MarqueeComponent, MarqueeItemDirective } from '@elementar/components/marquee';

@Component({
    selector: 'app-marquee-reverse-example',
    imports: [
        MarqueeComponent,
        MarqueeItemDirective
    ],
    templateUrl: './marquee-reverse-example.component.html',
    styleUrl: './marquee-reverse-example.component.scss'
})
export class MarqueeReverseExampleComponent {

}
