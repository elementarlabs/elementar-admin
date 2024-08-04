import { Directive, inject } from '@angular/core';
import { COMMENT_EDITOR, CommentEditor } from '@elementar/components/comment-editor/types';

@Directive({
  selector: '[emrCommentEditorCommandStrike]',
  standalone: true,
  host: {
    '[disabled]': `commentEditor && commentEditor.api.isCommandDisabled('toggleStrike')`,
    '[class.active]': `commentEditor && commentEditor.api.isActive('strike')`,
    '(click)': `onClick()`
  }
})
export class CommentEditorCommandStrikeDirective {
  protected commentEditor = inject<CommentEditor>(COMMENT_EDITOR);

  protected onClick() {
    this.commentEditor.api.runCommand('toggleStrike');
  }
}
