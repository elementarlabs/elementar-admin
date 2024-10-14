import { Component } from '@angular/core';
import { TeamWidgetComponent } from '@elementar/shared/widgets';

@Component({
  selector: 'app-team-example',
  standalone: true,
  imports: [
    TeamWidgetComponent
  ],
  templateUrl: './team-example.component.html',
  styleUrl: './team-example.component.scss'
})
export class TeamExampleComponent {

}
