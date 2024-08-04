import { Directive, inject } from '@angular/core';
import { UploadSelectedEvent, UploadTriggerDirective } from '@elementar/components/upload';
import { COMMENT_EDITOR, CommentEditor } from '../types';

@Directive({
  selector: '[emrCommentEditorCommandImage]',
  standalone: true,
  hostDirectives: [
    {
      directive: UploadTriggerDirective,
      outputs: ['fileSelected']
    }
  ],
  host: {
    '[attr.accept]': '"image/*"',
    '(fileSelected)': `onImageSelected($event)`
  }
})
export class CommentEditorCommandImageDirective {
  protected commentEditor = inject<CommentEditor>(COMMENT_EDITOR);

  protected onImageSelected(event: UploadSelectedEvent): void {
    const file = event.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const src = reader.result as string;
      this.commentEditor.api.editor().chain().focus().addImageUploadingPlaceholder({ src, file }).run();
    };
  }
}
