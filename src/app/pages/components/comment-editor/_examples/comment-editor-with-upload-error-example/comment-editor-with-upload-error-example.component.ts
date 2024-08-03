import { Component } from '@angular/core';
import { CommentEditorComponent } from '@elementar/components/comment-editor';
import { SafeHtmlPipe } from '@elementar/components/core';

@Component({
  selector: 'app-comment-editor-with-upload-error-example',
  standalone: true,
  imports: [
    CommentEditorComponent,
    SafeHtmlPipe
  ],
  templateUrl: './comment-editor-with-upload-error-example.component.html',
  styleUrl: './comment-editor-with-upload-error-example.component.scss'
})
export class CommentEditorWithUploadErrorExampleComponent {
  comments: string[] = [];

  uploadFn = (file: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Upload Error');
      }, 3000);
    });
  }

  onSent(content: string): void {
    this.comments.unshift(content);
  }
}
