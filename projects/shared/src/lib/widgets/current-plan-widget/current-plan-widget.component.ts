import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'emr-current-plan-widget',
  standalone: true,
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './current-plan-widget.component.html',
  styleUrl: './current-plan-widget.component.scss'
})
export class CurrentPlanWidgetComponent {

}
