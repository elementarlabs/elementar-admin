import { Component, Input } from '@angular/core';

@Component({
    selector: 'emr-pass-toggle-visibility',
    exportAs: 'emrPassToggleVisibility',
    templateUrl: './pass-toggle-visibility.component.html',
    styleUrls: ['./pass-toggle-visibility.component.scss'],
    standalone: false
})
export class PassToggleVisibilityComponent {
  @Input()
  isVisible: boolean;

  @Input()
  tabindex?: string;

  get type() {
    return this.isVisible ? 'text' : 'password';
  }
}
