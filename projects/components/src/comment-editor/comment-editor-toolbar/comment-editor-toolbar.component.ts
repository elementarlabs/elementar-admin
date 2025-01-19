import { Component } from '@angular/core';

@Component({
  selector: 'emr-comment-editor-toolbar',
  exportAs: 'emrCommentEditorToolbar',
  templateUrl: './comment-editor-toolbar.component.html',
  styleUrl: './comment-editor-toolbar.component.scss',
  host: {
    'class': 'emr-comment-editor-toolbar',
  }
})
export class CommentEditorToolbarComponent {
}
