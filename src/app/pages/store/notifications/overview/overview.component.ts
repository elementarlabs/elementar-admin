import { Component } from '@angular/core';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  InviteToEditorFilesInFolderNotificationExampleComponent
} from '../_examples/invite-to-editor-files-in-folder-notification-example/invite-to-editor-files-in-folder-notification-example.component';
import {
  MentionedInCommentNotificationExampleComponent
} from '../_examples/mentioned-in-comment-notification-example/mentioned-in-comment-notification-example.component';

@Component({
    selector: 'app-overview',
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
