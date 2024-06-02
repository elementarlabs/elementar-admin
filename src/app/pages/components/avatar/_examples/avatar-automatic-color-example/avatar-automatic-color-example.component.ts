import { Component } from '@angular/core';
import { EmrAvatarModule } from '@elementar/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-avatar-automatic-color-example',
  standalone: true,
  imports: [
    EmrAvatarModule,
    MatIcon
  ],
  templateUrl: './avatar-automatic-color-example.component.html',
  styleUrl: './avatar-automatic-color-example.component.scss'
})
export class AvatarAutomaticColorExampleComponent {

}
