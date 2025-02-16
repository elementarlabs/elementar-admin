import { Component } from '@angular/core';
import { MchartLineComponent } from '@elementar-ui/components';
import { ShuffleArrayPipe } from '@demo/meta/shuffle-array.pipe';

@Component({
    selector: 'app-mchart-line-basic-example',
    imports: [
        MchartLineComponent,
        ShuffleArrayPipe
    ],
    templateUrl: './mchart-line-basic-example.component.html',
    styleUrl: './mchart-line-basic-example.component.scss'
})
export class MchartLineBasicExampleComponent {

}
