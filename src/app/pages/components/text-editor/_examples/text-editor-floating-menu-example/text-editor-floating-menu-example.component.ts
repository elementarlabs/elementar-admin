import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import {
  TextEditorBubbleMenuComponent,
  TextEditorCommandBlockquoteDirective,
  TextEditorCommandBoldDirective,
  TextEditorCommandBulletListDirective,
  TextEditorCommandCodeBlockDirective,
  TextEditorCommandCodeDirective,
  TextEditorCommandDirective,
  TextEditorCommandEditLinkDirective,
  TextEditorCommandHeadingDirective,
  TextEditorCommandHorizontalRuleDirective,
  TextEditorCommandImageDirective,
  TextEditorCommandItalicDirective,
  TextEditorCommandLinkDirective,
  TextEditorCommandOrderedListDirective,
  TextEditorCommandStrikeDirective,
  TextEditorCommandUnsetLinkDirective,
  TextEditorCommandYoutubeDirective,
  TextEditorComponent, TextEditorDividerComponent,
  TextEditorFloatingMenuComponent
} from '@elementar-ui/components';

@Component({
  selector: 'app-text-editor-floating-menu-example',
  imports: [
    MatIcon,
    MatIconButton,
    MatTooltip,
    TextEditorBubbleMenuComponent,
    TextEditorFloatingMenuComponent,
    TextEditorCommandBlockquoteDirective,
    TextEditorCommandBoldDirective,
    TextEditorCommandBulletListDirective,
    TextEditorCommandCodeBlockDirective,
    TextEditorCommandCodeDirective,
    TextEditorCommandDirective,
    TextEditorCommandEditLinkDirective,
    TextEditorCommandHeadingDirective,
    TextEditorCommandHorizontalRuleDirective,
    TextEditorCommandImageDirective,
    TextEditorCommandItalicDirective,
    TextEditorCommandLinkDirective,
    TextEditorCommandOrderedListDirective,
    TextEditorCommandStrikeDirective,
    TextEditorCommandUnsetLinkDirective,
    TextEditorCommandYoutubeDirective,
    TextEditorComponent,
    TextEditorDividerComponent
  ],
  templateUrl: './text-editor-floating-menu-example.component.html',
  styleUrl: './text-editor-floating-menu-example.component.scss'
})
export class TextEditorFloatingMenuExampleComponent {
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
