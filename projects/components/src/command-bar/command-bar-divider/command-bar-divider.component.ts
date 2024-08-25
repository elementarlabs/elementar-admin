import { Component } from '@angular/core';

@Component({
  selector: 'emr-command-bar-divider',
  exportAs: 'emrCommandBarDivider',
  standalone: true,
  imports: [],
  templateUrl: './command-bar-divider.component.html',
  styleUrl: './command-bar-divider.component.scss',
  host: {
    'class': 'emr-command-bar-divider'
  }
})
export class CommandBarDividerComponent {
}
