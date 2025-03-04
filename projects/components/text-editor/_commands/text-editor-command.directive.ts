import { Directive } from '@angular/core';

@Directive({
  selector: '[emrTextEditorCommand]',
  exportAs: 'emrTextEditorCommand',
  host: {
    '[class.button]': 'true'
  }
})
export class TextEditorCommandDirective {
}
