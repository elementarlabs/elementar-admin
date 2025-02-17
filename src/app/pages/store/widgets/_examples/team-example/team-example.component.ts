import { Component } from '@angular/core';
import { TeamWidgetComponent } from '@store/widgets';

@Component({
    selector: 'app-team-example',
    imports: [
        TeamWidgetComponent
    ],
    templateUrl: './team-example.component.html',
    styleUrl: './team-example.component.scss'
})
export class TeamExampleComponent {

}
