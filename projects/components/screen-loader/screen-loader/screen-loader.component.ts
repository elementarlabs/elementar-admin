import { booleanAttribute, Component, input } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'emr-screen-loader',
  exportAs: 'emrScreenLoader',
  imports: [
    MatProgressBar
  ],
  templateUrl: './screen-loader.component.html',
  styleUrl: './screen-loader.component.scss',
  host: {
    'class': 'emr-screen-loader',
    '[class.is-opened]': 'opened()'
  }
})
export class ScreenLoaderComponent {
  opened = input(false, {
    transform: booleanAttribute
  });
}
