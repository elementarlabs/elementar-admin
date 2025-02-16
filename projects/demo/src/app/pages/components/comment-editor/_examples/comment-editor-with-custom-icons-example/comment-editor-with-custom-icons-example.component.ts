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
  CommentEditorCommandLinkDirective,
  CommentEditorCommandUnsetLinkDirective,
  CommentEditorCommandToggleToolbarDirective,
  CommentEditorFooterBarComponent
} from '@elementar-ui/components';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { SafeHtmlPipe } from '@elementar-ui/components';
import { IconComponent } from '@elementar-ui/components';

@Component({
  selector: 'app-comment-editor-with-custom-icons-example',
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
