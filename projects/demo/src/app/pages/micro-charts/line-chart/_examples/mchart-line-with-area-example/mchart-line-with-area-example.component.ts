import { Component } from '@angular/core';
import { MchartLineComponent } from '@elementar-ui/components';
import { ShuffleArrayPipe } from '@demo/meta/shuffle-array.pipe';

@Component({
    selector: 'app-mchart-line-with-area-example',
    imports: [
        MchartLineComponent,
        ShuffleArrayPipe
    ],
    templateUrl: './mchart-line-with-area-example.component.html',
    styleUrl: './mchart-line-with-area-example.component.scss'
})
export class MchartLineWithAreaExampleComponent {

}
