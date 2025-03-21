import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { EmojiPickerComponent, EmojiPickerTriggerForDirective } from '@elementar-ui/components/emoji-picker';

@Component({
  selector: 'app-basic-emoji-picker-example',
  imports: [
    MatButton,
    EmojiPickerComponent,
    EmojiPickerTriggerForDirective
  ],
  templateUrl: './basic-emoji-picker-example.component.html',
  styleUrl: './basic-emoji-picker-example.component.scss'
})
export class BasicEmojiPickerExampleComponent {

}
