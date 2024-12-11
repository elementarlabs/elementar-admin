import { Directive, inject } from '@angular/core';
import { TEXT_EDITOR, TextEditor } from '@elementar/components/text-editor';

@Directive({
  selector: '[emrTextEditorCommandHorizontalRule]',
  host: {
    '[class.button]': 'true',
    '(click)': `onClick()`
  }
})
export class TextEditorCommandHorizontalRuleDirective {
  protected textEditor = inject<TextEditor>(TEXT_EDITOR);

  protected onClick() {
    this.textEditor.api.editor().chain().focus().setHorizontalRule().run();
  }
}
