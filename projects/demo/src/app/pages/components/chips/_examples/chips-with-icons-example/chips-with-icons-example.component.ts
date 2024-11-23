import { Component } from '@angular/core';
import { MatChip, MatChipAvatar, MatChipSet } from '@angular/material/chips';

@Component({
    selector: 'app-chips-with-icons-example',
    imports: [
        MatChipAvatar,
        MatChipSet,
        MatChip
    ],
    templateUrl: './chips-with-icons-example.component.html',
    styleUrl: './chips-with-icons-example.component.scss'
})
export class ChipsWithIconsExampleComponent {

}
