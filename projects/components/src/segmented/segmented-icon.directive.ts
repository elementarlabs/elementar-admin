import { Directive } from '@angular/core';

@Directive({
  selector: '[emrSegmentedIcon]',
  exportAs: 'emrSegmentedIcon',
  standalone: true,
  host: {
    'class': 'emr-segmented-icon'
  }
})
export class SegmentedIconDirective {
}
