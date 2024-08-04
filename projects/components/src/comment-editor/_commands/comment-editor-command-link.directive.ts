import { Directive, inject } from '@angular/core';
import { COMMENT_EDITOR, CommentEditor } from '@elementar/components/comment-editor';

@Directive({
  selector: '[emrCommentEditorCommandLink]',
  standalone: true,
  host: {
    '[disabled]': `commentEditor && commentEditor.api.isCommandDisabled('toggleLink')`,
    '[class.active]': `commentEditor && commentEditor.api.isActive('link')`,
    '(click)': `onClick()`
  }
})
export class CommentEditorCommandLinkDirective {
  protected commentEditor = inject<CommentEditor>(COMMENT_EDITOR);

  protected onClick() {
    this.commentEditor.api.runCommand('toggleLink');
  }
}
