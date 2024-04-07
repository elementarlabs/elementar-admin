import { Component } from '@angular/core';

@Component({
  selector: 'emr-expand-button, [emr-expand-button]',
  exportAs: 'emrExpandButton',
  templateUrl: './expand-button.component.html',
  styleUrl: './expand-button.component.css',
  host: {
    'class': 'emr-expand-button'
  }
})
export class ExpandButtonComponent {
}
