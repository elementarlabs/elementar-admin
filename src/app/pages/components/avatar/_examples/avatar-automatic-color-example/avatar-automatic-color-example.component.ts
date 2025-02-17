import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { AvatarComponent, AvatarGroupComponent, AvatarTotalComponent } from '@elementar-ui/components';

@Component({
    selector: 'app-avatar-automatic-color-example',
    imports: [
        MatIcon,
        AvatarComponent,
        AvatarTotalComponent,
        AvatarGroupComponent
    ],
    templateUrl: './avatar-automatic-color-example.component.html',
    styleUrl: './avatar-automatic-color-example.component.scss'
})
export class AvatarAutomaticColorExampleComponent {

}
