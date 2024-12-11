import { Directive, inject } from '@angular/core';
import { TEXT_EDITOR, TextEditor } from '../types';

@Directive({
  selector: '[emrTextEditorCommandBulletList]',
  exportAs: 'emrTextEditorCommandBulletList',
  host: {
    '[disabled]': `textEditor && textEditor.api.isCommandDisabled('toggleBulletList')`,
    '[class.active]': `textEditor && textEditor.api.isActive('bulletList')`,
    '(click)': `onClick()`
  }
})
export class TextEditorCommandBulletListDirective {
  protected textEditor = inject<TextEditor>(TEXT_EDITOR);

  protected onClick() {
    this.textEditor.api.runCommand('toggleBulletList');
  }
}
