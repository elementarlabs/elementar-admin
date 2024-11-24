import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

import { GaugeComponent } from '../../../../../components/src/gauge/gauge/gauge.component';

@Component({
    selector: 'emr-used-space',
    imports: [
    GaugeComponent,
    MatIcon
],
    templateUrl: './used-space.component.html',
    styleUrl: './used-space.component.scss'
})
export class UsedSpaceComponent {

}
