import { Component } from '@angular/core';
import { EmrAlertModule } from '@elementar/components/alert';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-alert-actions-example',
    imports: [
        EmrAlertModule,
        MatIcon
    ],
    templateUrl: './alert-actions-example.component.html',
    styleUrl: './alert-actions-example.component.scss'
})
export class AlertActionsExampleComponent {

}
