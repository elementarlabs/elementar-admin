import { Directive, inject } from '@angular/core';
import { COMMENT_EDITOR, CommentEditor } from '../types';

@Directive({
  selector: '[emrCommentEditorCommandToggleToolbar]',
  standalone: true,
  host: {
    '[class.active]': `commentEditor && commentEditor.api.isToolbarActive()`,
    '(click)': `onClick()`
  }
})
export class CommentEditorCommandToggleToolbarDirective {
  protected commentEditor = inject<CommentEditor>(COMMENT_EDITOR);

  protected onClick(): void {
    this.commentEditor.api.toggleToolbar();
  }
}
