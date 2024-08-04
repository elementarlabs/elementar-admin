import { Directive, inject } from '@angular/core';
import { COMMENT_EDITOR, CommentEditor } from '@elementar/components/comment-editor/types';

@Directive({
  selector: '[emrCommentEditorCommandCodeBlock]',
  standalone: true,
  host: {
    '[disabled]': `commentEditor && commentEditor.api.isCommandDisabled('toggleCodeBlock')`,
    '[class.active]': `commentEditor && commentEditor.api.isActive('codeBlock')`,
    '(click)': `onClick()`
  }
})
export class CommentEditorCommandCodeBlockDirective {
  protected commentEditor = inject<CommentEditor>(COMMENT_EDITOR);

  protected onClick() {
    this.commentEditor.api.runCommand('toggleCodeBlock');
  }
}
