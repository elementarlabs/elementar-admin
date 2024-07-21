import { Component, Input } from '@angular/core';

@Component({
  selector: 'emr-command-bar-command',
  exportAs: 'emrCommandBarCommand',
  templateUrl: './command-bar-command.component.html',
  styleUrl: './command-bar-command.component.scss',
  host: {
    'class': 'emr-command-bar-command'
  }
})
export class CommandBarCommandComponent {
  @Input()
  shortcut: string;
}
