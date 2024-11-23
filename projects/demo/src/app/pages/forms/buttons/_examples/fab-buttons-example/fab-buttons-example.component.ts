import { Component } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-fab-buttons-example',
    imports: [
        MatFabButton,
        MatIcon
    ],
    templateUrl: './fab-buttons-example.component.html',
    styleUrl: './fab-buttons-example.component.scss'
})
export class FabButtonsExampleComponent {

}
