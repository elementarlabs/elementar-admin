import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import data from 'emojibase-data/en/data.json';
import groupsSubgroups from 'emojibase-data/en/messages.json';
import { EMOJI_PICKER_TRIGGER_FOR } from '../types';

@Component({
  selector: 'emr-emoji-picker',
  exportAs: 'emrEmojiPicker',
  templateUrl: './emoji-picker.component.html',
  styleUrl: './emoji-picker.component.scss',
  host: {
    'class': 'emr-emoji-picker',
  }
})
export class EmojiPickerComponent implements OnInit {
  private _trigger = inject<any>(EMOJI_PICKER_TRIGGER_FOR, { optional: true });

  selectEmojiLabel = input('Select an emoji...')

  readonly emojiSelected = output<string>();

  protected groups = signal<any[]>([]);
  protected _hoveredEmoji = signal<any>(null);

  ngOnInit() {
    const groups: any[] = [];
    const groupKeyMap = new Map<string, number>();
    groupsSubgroups.groups.forEach((group: any, index: number ) => {
      if (group.key === 'component') {
        return;
      }

      groupKeyMap.set(group.key, index);
    });
    groupsSubgroups.groups.forEach((group: any) => {
      if (group.key === 'component') {
        return;
      }

      const emoji: any[] = data.filter(emoji => {
        if (emoji.emoji === '🫩') {
          return false;
        }

        return emoji.group === groupKeyMap.get(group.key);
      });
      groups.push({
        name: group.message,
        emoji
      });
    });
    this.groups.set(groups);
  }

  select(emoji: any) {
    this.emojiSelected.emit(emoji.emoji);

    if (this._trigger) {
      this._trigger.api.close();
    }
  }

  hoverEmoji(emoji: any) {
    this._hoveredEmoji.set(emoji);
  }

  onMouseLeave() {
    this._hoveredEmoji.set(null);
  }
}
