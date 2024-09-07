import { Component, DestroyRef, forwardRef, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { LinkDialog } from '@elementar/components/comment-editor/link/link.dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { COMMENT_EDITOR, COMMENT_EDITOR_BUBBLE_MENU, CommentEditor } from '@elementar/components/comment-editor';

@Component({
  selector: 'emr-comment-editor-bubble-menu',
  exportAs: 'emrCommentEditorBubbleMenu',
  standalone: true,
  imports: [
    MatIcon
  ],
  providers: [
    {
      provide: COMMENT_EDITOR_BUBBLE_MENU,
      useExisting: forwardRef(() => CommentEditorBubbleMenuComponent)
    }
  ],
  templateUrl: './comment-editor-bubble-menu.component.html',
  styleUrl: './comment-editor-bubble-menu.component.scss'
})
export class CommentEditorBubbleMenuComponent {
  protected commentEditor = inject<CommentEditor>(COMMENT_EDITOR);

  getLinkUrl(): string | null {
    return (this.commentEditor.api.editor()?.getAttributes('link') as HTMLLinkElement).href || null;
  }
}
