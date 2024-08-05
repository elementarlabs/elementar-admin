import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { AvatarComponent, AvatarGroupComponent, AvatarTotalComponent } from '@elementar/components/avatar';

@Component({
  selector: 'app-avatar-automatic-color-example',
  standalone: true,
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
