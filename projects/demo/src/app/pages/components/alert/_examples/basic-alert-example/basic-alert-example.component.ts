import { Component } from '@angular/core';
import { EmrAlertModule } from '@elementar/components/alert';

@Component({
    selector: 'app-basic-alert-example',
    imports: [
        EmrAlertModule
    ],
    templateUrl: './basic-alert-example.component.html',
    styleUrl: './basic-alert-example.component.scss'
})
export class BasicAlertExampleComponent {
}
