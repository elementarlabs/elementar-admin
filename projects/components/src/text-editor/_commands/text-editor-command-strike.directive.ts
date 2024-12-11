import { Directive, inject } from '@angular/core';
import { TEXT_EDITOR, TextEditor } from '../types';

@Directive({
  selector: '[emrTextEditorCommandStrike]',
  exportAs: 'emrTextEditorCommandStrike',
  host: {
    '[disabled]': `textEditor && textEditor.api.isCommandDisabled('toggleStrike')`,
    '[class.active]': `textEditor && textEditor.api.isActive('strike')`,
    '(click)': `onClick()`
  }
})
export class TextEditorCommandStrikeDirective {
  protected textEditor = inject<TextEditor>(TEXT_EDITOR);

  protected onClick() {
    this.textEditor.api.runCommand('toggleStrike');
  }
}
