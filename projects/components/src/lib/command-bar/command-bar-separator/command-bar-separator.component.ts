import { Component } from '@angular/core';

@Component({
  selector: 'emr-command-bar-separator',
  exportAs: 'emrCommandBarSeparator',
  templateUrl: './command-bar-separator.component.html',
  styleUrl: './command-bar-separator.component.css',
  host: {
    'class': 'emr-command-bar-separator'
  }
})
export class CommandBarSeparatorComponent {
}
