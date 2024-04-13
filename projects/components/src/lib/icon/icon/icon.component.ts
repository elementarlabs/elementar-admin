import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { loadIcon } from 'iconify-icon';
import { SafeHtmlPipe } from '../../safe-html.pipe';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'emr-icon',
  exportAs: 'emrIcon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    SafeHtmlPipe
  ],
  host: {
    'class': 'emr-icon mat-icon'
  }
})
export class IconComponent extends MatIcon implements OnInit, OnChanges {
  private _cdr = inject(ChangeDetectorRef);

  name = input('');

  protected path = '';
  private _width = 0;
  private _height = 0;

  override async ngOnInit() {
    super.ngOnInit();
    await this._loadIcon();
  }

  get viewBox(): string {
    return `0 0 ${this._width} ${this._height}`
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['name'] && !changes['name'].isFirstChange()) {
      console.log(333);
      await this._loadIcon();
    }
  }

  private async _loadIcon() {
    const data = await loadIcon(this.name());
    this.path = data.body;
    this._width = data.width;
    this._height = data.height;
    this._cdr.markForCheck();
  }
}
