import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-basic-card-example',
    imports: [
        MatCardContent,
        MatCard
    ],
    templateUrl: './basic-card-example.component.html',
    styleUrl: './basic-card-example.component.scss'
})
export class BasicCardExampleComponent {

}
