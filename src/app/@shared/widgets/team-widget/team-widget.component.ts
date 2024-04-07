import { Component } from '@angular/core';
import { EmrAvatarModule } from '@components/avatar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-team-widget',
  standalone: true,
  imports: [
    EmrAvatarModule,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './team-widget.component.html',
  styleUrl: './team-widget.component.scss'
})
export class TeamWidgetComponent {

}
