import { Component } from '@angular/core';
import { CommentEditorComponent } from '@elementar/components/comment-editor';
import { SafeHtmlPipe } from '@elementar/components/core';

@Component({
  selector: 'app-basic-comment-editor-example',
  standalone: true,
  imports: [
    CommentEditorComponent,
    SafeHtmlPipe
  ],
  templateUrl: './basic-comment-editor-example.component.html',
  styleUrl: './basic-comment-editor-example.component.scss'
})
export class BasicCommentEditorExampleComponent {
  comments: string[] = [];

  onSend(content: string): void {
    this.comments.unshift(content);
  }
}
