import { Component } from '@angular/core';
import { CommentEditorComponent } from '@elementar/components/comment-editor';
import { SafeHtmlPipe } from '@elementar/components/core';

@Component({
  selector: 'app-comment-editor-with-toolbar-example',
  standalone: true,
  imports: [
    CommentEditorComponent,
    SafeHtmlPipe
  ],
  templateUrl: './comment-editor-with-toolbar-example.component.html',
  styleUrl: './comment-editor-with-toolbar-example.component.scss'
})
export class CommentEditorWithToolbarExampleComponent {
  comments: string[] = [];

  uploadFn = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('/assets/image-viewer/1.jpg');
      }, 3000);
    });
  }

  onSent(content: string): void {
    this.comments.unshift(content);
  }
}
