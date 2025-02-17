import { Component } from '@angular/core';
import { SiteVisitorsWidgetComponent } from '@store/widgets';

@Component({
    selector: 'app-site-visitors-example',
    imports: [
        SiteVisitorsWidgetComponent
    ],
    templateUrl: './site-visitors-example.component.html',
    styleUrl: './site-visitors-example.component.scss'
})
export class SiteVisitorsExampleComponent {

}
