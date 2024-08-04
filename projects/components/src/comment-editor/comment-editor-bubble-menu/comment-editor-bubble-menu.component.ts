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
  private _destroyRef = inject(DestroyRef);
  private _dialog = inject(MatDialog);
  protected commentEditor = inject<CommentEditor>(COMMENT_EDITOR);
  protected setLinkActive = false;

  setLink(): void {
    this.setLinkActive = true;
    const dialogRef = this._dialog.open(LinkDialog, {
      data: {
        linkUrl: (this.commentEditor.api.editor().getAttributes('link') as HTMLLinkElement).href
      }
    });
    dialogRef
      .afterClosed()
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((linkUrl: string) => {
        this.setLinkActive = false;

        if (typeof linkUrl === 'undefined') {
          return;
        }

        this._setLink(linkUrl);
      })
    ;
  }

  unsetLink(): void {
    this.commentEditor.api.editor().commands.unsetLink()
  }

  getLinkUrl(): string | null {
    return (this.commentEditor.api.editor().getAttributes('link') as HTMLLinkElement).href || null;
  }

  private _setLink(url: string): void {
    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      this.commentEditor.api.editor()
        .chain()
        .focus()
        .extendMarkRange('link')
        .unsetLink()
        .run()
      ;
      return;
    }

    // update link
    this.commentEditor.api.editor()
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url })
      .run()
    ;
  }
}
