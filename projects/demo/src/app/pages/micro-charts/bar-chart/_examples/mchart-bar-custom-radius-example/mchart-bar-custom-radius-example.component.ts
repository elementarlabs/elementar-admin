import { Component } from '@angular/core';
import { MchartBarComponent } from '@elementar-ui/components';
import { ShuffleArrayPipe } from '@demo/meta/shuffle-array.pipe';

@Component({
    selector: 'app-mchart-bar-custom-radius-example',
    imports: [
        MchartBarComponent,
        ShuffleArrayPipe
    ],
    templateUrl: './mchart-bar-custom-radius-example.component.html',
    styleUrl: './mchart-bar-custom-radius-example.component.scss'
})
export class MchartBarCustomRadiusExampleComponent {

}
