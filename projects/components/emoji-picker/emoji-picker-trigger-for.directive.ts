import { Directive, input } from '@angular/core';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';

@Directive({
  selector: '[emrEmojiPickerTriggerFor]'
})
export class EmojiPickerTriggerForDirective {
  for = input.required<EmojiPickerComponent>({
    alias: 'emrEmojiPickerTriggerFor'
  });
}
