import { Component } from '@angular/core';
import {
  InviteToEditorFilesInFolderNotificationExampleComponent
} from '../_examples/invite-to-editor-files-in-folder-notification-example/invite-to-editor-files-in-folder-notification-example.component';
import {
  MentionedInCommentNotificationExampleComponent
} from '../_examples/mentioned-in-comment-notification-example/mentioned-in-comment-notification-example.component';
import { PageComponent } from '../../../_meta/page/page.component';
import { PageContentDirective } from '../../../_meta/page/page-content.directive';
import { PlaygroundComponent } from '../../../_meta/playground/playground.component';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    InviteToEditorFilesInFolderNotificationExampleComponent,
    MentionedInCommentNotificationExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
