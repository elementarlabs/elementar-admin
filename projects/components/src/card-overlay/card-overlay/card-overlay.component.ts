import { booleanAttribute, Component, input } from '@angular/core';

@Component({
    selector: 'emr-card-overlay',
    exportAs: 'emrCardOverlay',
    imports: [],
    templateUrl: './card-overlay.component.html',
    styleUrl: './card-overlay.component.scss',
    host: {
        'class': 'emr-card-overlay',
        '[class.with-translate]': 'withTranslate()',
        '[class.with-blur]': 'withBlur()',
    }
})
export class CardOverlayComponent {
  withTranslate = input(false, {
    transform: booleanAttribute
  });
  withBlur = input(false, {
    transform: booleanAttribute
  });
}
