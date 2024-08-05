import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { AvatarComponent } from '@elementar/components/avatar';

@Component({
  selector: 'app-avatar-with-icons-example',
  standalone: true,
  imports: [
    MatIcon,
    AvatarComponent
  ],
  templateUrl: './avatar-with-icons-example.component.html',
  styleUrl: './avatar-with-icons-example.component.scss'
})
export class AvatarWithIconsExampleComponent {

}
