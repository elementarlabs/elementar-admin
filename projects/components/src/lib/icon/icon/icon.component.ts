import {
  booleanAttribute,
  Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef,
  inject, input,
  Input,
  numberAttribute,
  OnChanges,
  OnInit, PLATFORM_ID,
  SimpleChanges
} from '@angular/core';
import { loadIcon } from 'iconify-icon';
import { isPlatformServer } from '@angular/common';
import { SafeHtmlPipe } from '../../safe-html.pipe';

@Component({
  selector: 'emr-icon',
  exportAs: 'emrIcon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    SafeHtmlPipe
  ],
  host: {
    'class': 'emr-icon'
  }
})
export class IconComponent implements OnInit, OnChanges {
  name = input('');

  protected path = '';
  private _width = 0;
  private _height = 0;

  async ngOnInit() {
    await this._loadIcon();
  }

  get viewBox() {
    return `0 0 ${this._width} ${this._height}`
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['name'] && !changes['name'].isFirstChange()) {
      await this._loadIcon();
    }
  }

  private async _loadIcon() {
    const data = await loadIcon(this.name());
    this.path = data.body;
    this._width = data.width;
    this._height = data.height;
  }
}
