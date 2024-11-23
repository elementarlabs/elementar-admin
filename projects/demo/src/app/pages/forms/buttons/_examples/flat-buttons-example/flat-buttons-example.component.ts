import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { ButtonDirective } from '@elementar/components/core';

@Component({
    selector: 'app-flat-buttons-example',
    imports: [
        MatAnchor,
        MatButton,
        ButtonDirective
    ],
    templateUrl: './flat-buttons-example.component.html',
    styleUrl: './flat-buttons-example.component.scss'
})
export class FlatButtonsExampleComponent {

}
