import { Directive, inject } from '@angular/core';
import { COMMENT_EDITOR, CommentEditor } from '@elementar/components/comment-editor/types';

@Directive({
  selector: '[emrCommentEditorCommandBlockquote]',
  standalone: true,
  host: {
    '[class.button]': 'true',
    '[disabled]': `commentEditor && commentEditor.api.isCommandDisabled('toggleBlockquote')`,
    '[class.active]': `commentEditor && commentEditor.api.isActive('blockquote')`,
    '(click)': `onClick()`
  }
})
export class CommentEditorCommandBlockquoteDirective {
  protected commentEditor = inject<CommentEditor>(COMMENT_EDITOR);

  protected onClick() {
    this.commentEditor.api.runCommand('toggleBlockquote');
  }
}
