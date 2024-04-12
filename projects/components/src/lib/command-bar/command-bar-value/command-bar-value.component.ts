import { Component } from '@angular/core';

@Component({
  selector: 'emr-command-bar-value',
  exportAs: 'emrCommandBarValue',
  templateUrl: './command-bar-value.component.html',
  styleUrl: './command-bar-value.component.css',
  host: {
    'class': 'emr-command-bar-value'
  }
})
export class CommandBarValueComponent {
}
