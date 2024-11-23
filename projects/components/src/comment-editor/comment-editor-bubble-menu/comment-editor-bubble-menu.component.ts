import { Component, forwardRef, inject } from '@angular/core';
import { COMMENT_EDITOR, COMMENT_EDITOR_BUBBLE_MENU, CommentEditor } from '@elementar/components/comment-editor';

@Component({
  selector: 'emr-comment-editor-bubble-menu',
  exportAs: 'emrCommentEditorBubbleMenu',
  imports: [
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
