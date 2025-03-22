import { Component, inject, input, LOCALE_ID, OnInit, output, signal } from '@angular/core';
import { EMOJI_PICKER_TRIGGER_FOR } from '../types';
import { SkeletonBlockComponent, SkeletonComponent, SkeletonLineComponent } from '@elementar-ui/components/skeleton';

const loadedEmoji = new Map<string, { groups: any[] }>();
const loadGroups = (language: string) => {
  const imports: any = {
    en: import('emojibase-data/en/messages.json'),
    bn: import('emojibase-data/bn/messages.json'),
    da: import('emojibase-data/da/messages.json'),
    de: import('emojibase-data/de/messages.json'),
    es: import('emojibase-data/es/messages.json'),
    et: import('emojibase-data/et/messages.json'),
    fi: import('emojibase-data/fi/messages.json'),
    fr: import('emojibase-data/fr/messages.json'),
    hi: import('emojibase-data/hi/messages.json'),
    hu: import('emojibase-data/hu/messages.json'),
    it: import('emojibase-data/it/messages.json'),
    ja: import('emojibase-data/ja/messages.json'),
    ko: import('emojibase-data/ko/messages.json'),
    lt: import('emojibase-data/lt/messages.json'),
    ms: import('emojibase-data/ms/messages.json'),
    nb: import('emojibase-data/nb/messages.json'),
    nl: import('emojibase-data/nl/messages.json'),
    pl: import('emojibase-data/pl/messages.json'),
    pt: import('emojibase-data/pt/messages.json'),
    ru: import('emojibase-data/ru/messages.json'),
    sv: import('emojibase-data/sv/messages.json'),
    th: import('emojibase-data/th/messages.json'),
    uk: import('emojibase-data/uk/messages.json'),
    vi: import('emojibase-data/vi/messages.json'),
    zh: import('emojibase-data/zh/messages.json'),
  };

  if (imports[language]) {
    return imports[language];
  }

  return imports['en'];
}

const loadData = (language: string) => {
  const imports: any = {
    en: import('emojibase-data/en/data.json').then(m => m.default),
    bn: import('emojibase-data/bn/data.json').then(m => m.default),
    da: import('emojibase-data/da/data.json').then(m => m.default),
    de: import('emojibase-data/de/data.json').then(m => m.default),
    es: import('emojibase-data/es/data.json').then(m => m.default),
    et: import('emojibase-data/et/data.json').then(m => m.default),
    fi: import('emojibase-data/fi/data.json').then(m => m.default),
    fr: import('emojibase-data/fr/data.json').then(m => m.default),
    hi: import('emojibase-data/hi/data.json').then(m => m.default),
    hu: import('emojibase-data/hu/data.json').then(m => m.default),
    it: import('emojibase-data/it/data.json').then(m => m.default),
    ja: import('emojibase-data/ja/data.json').then(m => m.default),
    ko: import('emojibase-data/ko/data.json').then(m => m.default),
    lt: import('emojibase-data/lt/data.json').then(m => m.default),
    ms: import('emojibase-data/ms/data.json').then(m => m.default),
    nb: import('emojibase-data/nb/data.json').then(m => m.default),
    nl: import('emojibase-data/nl/data.json').then(m => m.default),
    pl: import('emojibase-data/pl/data.json').then(m => m.default),
    pt: import('emojibase-data/pt/data.json').then(m => m.default),
    ru: import('emojibase-data/ru/data.json').then(m => m.default),
    sv: import('emojibase-data/sv/data.json').then(m => m.default),
    th: import('emojibase-data/th/data.json').then(m => m.default),
    uk: import('emojibase-data/uk/data.json').then(m => m.default),
    vi: import('emojibase-data/vi/data.json').then(m => m.default),
    zh: import('emojibase-data/zh/data.json').then(m => m.default),
  };

  if (imports[language]) {
    return imports[language];
  }

  return imports['en'];
}

@Component({
  selector: 'emr-emoji-picker',
  exportAs: 'emrEmojiPicker',
  templateUrl: './emoji-picker.component.html',
  styleUrl: './emoji-picker.component.scss',
  imports: [
    SkeletonComponent,
    SkeletonLineComponent,
    SkeletonBlockComponent
  ],
  host: {
    'class': 'emr-emoji-picker',
  }
})
export class EmojiPickerComponent implements OnInit {
  private _trigger = inject<any>(EMOJI_PICKER_TRIGGER_FOR, { optional: true });
  private _localeId = inject(LOCALE_ID);

  language = input('');
  selectEmojiLabel = input('Select an emoji...');

  readonly emojiSelected = output<string>();

  protected loaded = signal(false);
  protected groups = signal<any[]>([]);
  protected _hoveredEmoji = signal<any>(null);
  protected _skeletonEmoji = signal(Array(42).fill(1).map((x, y) => x + y));

  async ngOnInit() {
    let language: string = this.language();

    if (!language) {
      language = this._localeId.split('-')[0];
    }

    if (loadedEmoji.has(language)) {
      this.groups.set(loadedEmoji.get(language)?.groups as any);
    } else {
      const groupsSubgroups = await loadGroups(language);
      const data = await loadData(language);
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

        const emoji: any[] = data.filter((emoji: any) => {
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
      loadedEmoji.set(this.language(), { groups });
    }

    this.loaded.set(true);
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
