import { Component } from '@angular/core';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-basic-menu-example',
    imports: [
        MatMenuItem,
        MatMenu,
        MatMenuTrigger,
        MatButton
    ],
    templateUrl: './basic-menu-example.component.html',
    styleUrl: './basic-menu-example.component.scss'
})
export class BasicMenuExampleComponent {

}
