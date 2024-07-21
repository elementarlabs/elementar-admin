import { Component } from '@angular/core';
import { EmrAvatarModule } from '@elementar/components/avatar';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-avatar-with-icons-example',
  standalone: true,
  imports: [
    EmrAvatarModule,
    MatIcon
  ],
  templateUrl: './avatar-with-icons-example.component.html',
  styleUrl: './avatar-with-icons-example.component.scss'
})
export class AvatarWithIconsExampleComponent {

}
