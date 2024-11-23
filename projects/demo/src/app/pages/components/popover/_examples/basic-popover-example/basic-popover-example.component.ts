import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { EmrPopoverModule } from '@elementar/components/popover';

@Component({
    selector: 'app-basic-popover-example',
    imports: [
        MatButton,
        EmrPopoverModule
    ],
    templateUrl: './basic-popover-example.component.html',
    styleUrl: './basic-popover-example.component.scss'
})
export class BasicPopoverExampleComponent {

}
