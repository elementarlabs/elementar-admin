import { Component, forwardRef, inject } from '@angular/core';
import { TEXT_EDITOR, TEXT_EDITOR_BUBBLE_MENU, TextEditor } from '../types';

@Component({
  selector: 'emr-text-editor-bubble-menu',
  exportAs: 'emitTextEditorBubbleMenu',
  imports: [],
  providers: [
    {
      provide: TEXT_EDITOR_BUBBLE_MENU,
      useExisting: forwardRef(() => TextEditorBubbleMenuComponent)
    }
  ],
  templateUrl: './text-editor-bubble-menu.component.html',
  styleUrl: './text-editor-bubble-menu.component.scss'
})
export class TextEditorBubbleMenuComponent {
  protected textEditor = inject<TextEditor>(TEXT_EDITOR);

  getLinkUrl(): string | null {
    return (this.textEditor.api.editor()?.getAttributes('link') as HTMLLinkElement).href || null;
  }
}
