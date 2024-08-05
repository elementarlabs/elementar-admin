import { Component } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AvatarComponent } from '@elementar/components/avatar';

@Component({
  selector: 'app-tasks-in-progress-widget',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    MatIconButton,
    AvatarComponent
  ],
  templateUrl: './tasks-in-progress-widget.component.html',
  styleUrl: './tasks-in-progress-widget.component.scss'
})
export class TasksInProgressWidgetComponent {

}
