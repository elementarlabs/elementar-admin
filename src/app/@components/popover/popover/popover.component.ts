import { Component } from '@angular/core';

@Component({
  selector: 'emr-popover',
  exportAs: 'emrPopover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  host: {
    'class': 'emr-popover'
  }
})
export class PopoverComponent {
}
