import { Component } from '@angular/core';
import {
  CommentEditorDividerComponent,
  CommentEditorCommandBlockquoteDirective,
  CommentEditorCommandBoldDirective,
  CommentEditorCommandBulletListDirective,
  CommentEditorCommandCodeBlockDirective,
  CommentEditorCommandDirective,
  CommentEditorCommandImageDirective,
  CommentEditorCommandItalicDirective,
  CommentEditorCommandOrderedListDirective,
  CommentEditorCommandStrikeDirective,
  CommentEditorCommandYoutubeDirective,
  CommentEditorComponent,
  CommentEditorToolbarComponent,
  CommentEditorBubbleMenuComponent,
  CommentEditorCommandCodeDirective,
  CommentEditorCommandEditLinkDirective,
  CommentEditorCommandLinkDirective, CommentEditorCommandUnsetLinkDirective, CommentEditorCommandToggleToolbarDirective
} from '@elementar/components/comment-editor';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { SafeHtmlPipe } from '@elementar/components/core';
import { IconComponent } from '@elementar/components/icon';
import {
  CommentEditorFooterBarComponent
} from '@elementar/components/comment-editor/comment-editor-footer-bar/comment-editor-footer-bar.component';

@Component({
  selector: 'app-comment-editor-with-custom-icons-example',
  standalone: true,
  imports: [
    CommentEditorDividerComponent,
    CommentEditorCommandBlockquoteDirective,
    CommentEditorCommandBoldDirective,
    CommentEditorCommandBulletListDirective,
    CommentEditorCommandCodeBlockDirective,
    CommentEditorCommandDirective,
    CommentEditorCommandImageDirective,
    CommentEditorCommandItalicDirective,
    CommentEditorCommandOrderedListDirective,
    CommentEditorCommandStrikeDirective,
    CommentEditorCommandYoutubeDirective,
    CommentEditorComponent,
    MatIcon,
    MatIconButton,
    MatTooltip,
    SafeHtmlPipe,
    IconComponent,
    CommentEditorToolbarComponent,
    CommentEditorBubbleMenuComponent,
    CommentEditorCommandCodeDirective,
    CommentEditorCommandEditLinkDirective,
    CommentEditorCommandLinkDirective,
    CommentEditorCommandUnsetLinkDirective,
    CommentEditorCommandToggleToolbarDirective,
    CommentEditorFooterBarComponent
  ],
  templateUrl: './comment-editor-with-custom-icons-example.component.html',
  styleUrl: './comment-editor-with-custom-icons-example.component.scss'
})
export class CommentEditorWithCustomIconsExampleComponent {
  comments: string[] = [];

  uploadFn = (file: Blob): Promise<string> => {
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
