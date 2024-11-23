import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { EmrGaugeModule } from '@elementar/components/gauge';

@Component({
    selector: 'emr-used-space',
    imports: [
        EmrGaugeModule,
        MatIcon
    ],
    templateUrl: './used-space.component.html',
    styleUrl: './used-space.component.scss'
})
export class UsedSpaceComponent {

}
