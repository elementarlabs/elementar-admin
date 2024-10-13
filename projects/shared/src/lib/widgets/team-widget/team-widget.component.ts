import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { AvatarComponent } from '@elementar/components/avatar';

@Component({
  selector: 'emr-team-widget',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    AvatarComponent
  ],
  templateUrl: './team-widget.component.html',
  styleUrl: './team-widget.component.scss'
})
export class TeamWidgetComponent {

}
