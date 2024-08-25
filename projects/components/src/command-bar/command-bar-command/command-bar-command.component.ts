import { Component, input, Input } from '@angular/core';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'emr-command-bar-command,[emr-command-bar-command]',
  exportAs: 'emrCommandBarCommand',
  standalone: true,
  templateUrl: './command-bar-command.component.html',
  styleUrl: './command-bar-command.component.scss',
  hostDirectives: [
    MatRipple,
  ],
  host: {
    'class': 'emr-command-bar-command'
  }
})
export class CommandBarCommandComponent {
  shortcut = input('');
}
