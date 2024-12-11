import { Component } from '@angular/core';
import {
  TextEditorBubbleMenuComponent,
  TextEditorCommandBlockquoteDirective,
  TextEditorCommandBoldDirective,
  TextEditorCommandBulletListDirective,
  TextEditorCommandCodeBlockDirective,
  TextEditorCommandCodeDirective,
  TextEditorCommandDirective,
  TextEditorCommandEditLinkDirective, TextEditorCommandHeadingDirective, TextEditorCommandHorizontalRuleDirective,
  TextEditorCommandImageDirective,
  TextEditorCommandItalicDirective,
  TextEditorCommandLinkDirective,
  TextEditorCommandOrderedListDirective,
  TextEditorCommandStrikeDirective,
  TextEditorCommandUnsetLinkDirective,
  TextEditorCommandYoutubeDirective,
  TextEditorComponent,
  TextEditorDividerComponent,
  TextEditorToolbarComponent
} from '@elementar/components/text-editor';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-basic-text-editor-example',
  imports: [
    TextEditorComponent,
    MatIcon,
    MatIconButton,
    MatTooltip,
    TextEditorBubbleMenuComponent,
    TextEditorDividerComponent,
    TextEditorToolbarComponent,
    TextEditorCommandDirective,
    TextEditorCommandBoldDirective,
    TextEditorCommandItalicDirective,
    TextEditorCommandStrikeDirective,
    TextEditorCommandBulletListDirective,
    TextEditorCommandOrderedListDirective,
    TextEditorCommandBlockquoteDirective,
    TextEditorCommandCodeBlockDirective,
    TextEditorCommandImageDirective,
    TextEditorCommandYoutubeDirective,
    TextEditorCommandEditLinkDirective,
    TextEditorCommandUnsetLinkDirective,
    TextEditorCommandLinkDirective,
    TextEditorCommandCodeDirective,
    TextEditorCommandHeadingDirective,
    TextEditorCommandHorizontalRuleDirective
  ],
  templateUrl: './basic-text-editor-example.component.html',
  styleUrl: './basic-text-editor-example.component.scss'
})
export class BasicTextEditorExampleComponent {
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
}
