import { Component } from '@angular/core';
import { EmrResizableContainerModule } from '@elementar/components/resizable-container';

@Component({
    selector: 'app-basic-resizable-container-example',
    imports: [
        EmrResizableContainerModule
    ],
    templateUrl: './basic-resizable-container-example.component.html',
    styleUrl: './basic-resizable-container-example.component.scss'
})
export class BasicResizableContainerExampleComponent {

}
