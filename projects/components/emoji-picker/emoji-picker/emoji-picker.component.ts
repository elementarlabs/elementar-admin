import { Component, OnInit, signal, TemplateRef, viewChild } from '@angular/core';
import data from 'emojibase-data/en/data.json';
import groupsSubgroups from 'emojibase-data/en/messages.json';

@Component({
  selector: 'emr-emoji-picker',
  exportAs: 'emrEmojiPicker',
  imports: [
  ],
  templateUrl: './emoji-picker.component.html',
  styleUrl: './emoji-picker.component.scss'
})
export class EmojiPickerComponent implements OnInit {
  private _contentRef = viewChild.required<TemplateRef<any>>('contentRef');
  groups = signal<any[]>([]);

  ngOnInit() {
    const groups: any[] = [];
    const groupKeyMap = new Map<string, number>();
    groupsSubgroups.groups.forEach((group: any, index: number ) => {
      groupKeyMap.set(group.key, index);
    });
    groupsSubgroups.groups.forEach((group: any) => {
      const emoji: any[] = data.filter(emoji => {
        return emoji.group === groupKeyMap.get(group.key);
      });
      groups.push({
        name: group.message,
        emoji
      });
    });
    this.groups.set(groups);
  }
}
