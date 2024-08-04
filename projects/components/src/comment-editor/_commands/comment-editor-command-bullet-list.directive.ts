import { Directive, inject } from '@angular/core';
import { COMMENT_EDITOR, CommentEditor } from '@elementar/components/comment-editor/types';

@Directive({
  selector: '[emrCommentEditorCommandBulletList]',
  standalone: true,
  host: {
    '[disabled]': `commentEditor && commentEditor.api.isCommandDisabled('toggleBulletList')`,
    '[class.active]': `commentEditor && commentEditor.api.isActive('bulletList')`,
    '(click)': `onClick()`
  }
})
export class CommentEditorCommandBulletListDirective {
  protected commentEditor = inject<CommentEditor>(COMMENT_EDITOR);

  protected onClick() {
    this.commentEditor.api.runCommand('toggleBulletList');
  }
}
