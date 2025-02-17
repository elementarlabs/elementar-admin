import { Component } from '@angular/core';
import { ToolbarComponent } from '@store/sidebar';

@Component({
    selector: 'app-toolbar-widget-example',
    imports: [
        ToolbarComponent
    ],
    templateUrl: './toolbar-widget-example.component.html',
    styleUrl: './toolbar-widget-example.component.scss'
})
export class ToolbarWidgetExampleComponent {

}
