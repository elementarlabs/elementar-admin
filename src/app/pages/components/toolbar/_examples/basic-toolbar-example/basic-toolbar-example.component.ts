import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-basic-toolbar-example',
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule
    ],
    templateUrl: './basic-toolbar-example.component.html',
    styleUrl: './basic-toolbar-example.component.scss'
})
export class BasicToolbarExampleComponent {

}
