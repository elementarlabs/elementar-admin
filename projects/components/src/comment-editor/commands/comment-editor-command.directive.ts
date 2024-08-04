import { Directive } from '@angular/core';

@Directive({
  selector: '[emrCommentEditorCommand]',
  standalone: true,
  host: {
    '[class.button]': 'true'
  }
})
export class CommentEditorCommandDirective {

}
