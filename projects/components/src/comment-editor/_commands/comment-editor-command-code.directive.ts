import { Directive, inject } from '@angular/core';
import { COMMENT_EDITOR, CommentEditor } from '@elementar/components/comment-editor';

@Directive({
  selector: '[emrCommentEditorCommandCode]',
  standalone: true,
  host: {
    '[disabled]': `commentEditor && commentEditor.api.isCommandDisabled('toggleCode')`,
    '[class.active]': `commentEditor && commentEditor.api.isActive('code')`,
    '(click)': `onClick()`
  }
})
export class CommentEditorCommandCodeDirective {
  protected commentEditor = inject<CommentEditor>(COMMENT_EDITOR);

  protected onClick() {
    this.commentEditor.api.runCommand('toggleCode');
  }
}
