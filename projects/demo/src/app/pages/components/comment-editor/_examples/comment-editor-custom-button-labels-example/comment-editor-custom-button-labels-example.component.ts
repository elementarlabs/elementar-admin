import { Component } from '@angular/core';
import {
  CommentEditorBubbleMenuComponent,
  CommentEditorCommandBlockquoteDirective,
  CommentEditorCommandBoldDirective,
  CommentEditorCommandBulletListDirective,
  CommentEditorCommandCodeBlockDirective,
  CommentEditorCommandCodeDirective,
  CommentEditorCommandDirective,
  CommentEditorCommandEditLinkDirective,
  CommentEditorCommandImageDirective,
  CommentEditorCommandItalicDirective,
  CommentEditorCommandLinkDirective,
  CommentEditorCommandOrderedListDirective,
  CommentEditorCommandStrikeDirective,
  CommentEditorCommandToggleToolbarDirective,
  CommentEditorCommandUnsetLinkDirective,
  CommentEditorCommandYoutubeDirective,
  CommentEditorComponent,
  CommentEditorDividerComponent,
  CommentEditorToolbarComponent
} from '@elementar/components/comment-editor';
import {
  CommentEditorFooterBarComponent
} from '@elementar/components/comment-editor/comment-editor-footer-bar/comment-editor-footer-bar.component';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { SafeHtmlPipe } from '@elementar/components/core';

@Component({
  selector: 'app-comment-editor-custom-button-labels-example',
  standalone: true,
  imports: [
    CommentEditorBubbleMenuComponent,
    CommentEditorCommandBlockquoteDirective,
    CommentEditorCommandBoldDirective,
    CommentEditorCommandBulletListDirective,
    CommentEditorCommandCodeBlockDirective,
    CommentEditorCommandCodeDirective,
    CommentEditorCommandDirective,
    CommentEditorCommandEditLinkDirective,
    CommentEditorCommandImageDirective,
    CommentEditorCommandItalicDirective,
    CommentEditorCommandLinkDirective,
    CommentEditorCommandOrderedListDirective,
    CommentEditorCommandStrikeDirective,
    CommentEditorCommandToggleToolbarDirective,
    CommentEditorCommandUnsetLinkDirective,
    CommentEditorCommandYoutubeDirective,
    CommentEditorComponent,
    CommentEditorDividerComponent,
    CommentEditorFooterBarComponent,
    CommentEditorToolbarComponent,
    MatIcon,
    MatIconButton,
    MatTooltip,
    SafeHtmlPipe
  ],
  templateUrl: './comment-editor-custom-button-labels-example.component.html',
  styleUrl: './comment-editor-custom-button-labels-example.component.scss'
})
export class CommentEditorCustomButtonLabelsExampleComponent {
  comments: string[] = [];

  uploadFn = (file: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('/assets/image-viewer/1.jpg');
      }, 3000);
    });

    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     reject('Upload Error');
    //   }, 3000);
    // });

    // upload to a server
    // return new Promise((resolve, reject) => {
    //   const formData = new FormData();
    //   formData.append('image', file);
    //   this._api
    //     .post(`upload`, formData)
    //     .subscribe((res: any) => {
    //       resolve(res.url);
    //     })
    //   ;
    // });
  }

  onSent(content: string): void {
    this.comments.unshift(content);
  }
}
