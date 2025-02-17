import { Component } from '@angular/core';
import { CurrentPlanWidgetComponent } from '@store/widgets';

@Component({
    selector: 'app-current-plan-example',
    imports: [
        CurrentPlanWidgetComponent
    ],
    templateUrl: './current-plan-example.component.html',
    styleUrl: './current-plan-example.component.scss'
})
export class CurrentPlanExampleComponent {

}
