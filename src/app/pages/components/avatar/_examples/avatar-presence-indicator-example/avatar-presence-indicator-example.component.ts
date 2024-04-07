import { Component } from '@angular/core';
import { EmrAvatarModule } from '@components/avatar';

@Component({
  selector: 'app-avatar-presence-indicator-example',
  standalone: true,
  imports: [
    EmrAvatarModule
  ],
  templateUrl: './avatar-presence-indicator-example.component.html',
  styleUrl: './avatar-presence-indicator-example.component.scss'
})
export class AvatarPresenceIndicatorExampleComponent {

}
