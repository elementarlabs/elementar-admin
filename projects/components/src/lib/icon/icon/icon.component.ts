import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { loadIcon } from 'iconify-icon';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'emr-icon',
  exportAs: 'emrIcon',
  standalone: true,
  template: '',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'emr-icon',
    '[innerHTML]': '_iconHtml',
  }
})
export class IconComponent implements OnInit, OnChanges {
  private _cdr = inject(ChangeDetectorRef);
  private _sanitizer = inject(DomSanitizer);
  protected _iconHtml: SafeHtml;

  name = input.required<string>();

  async ngOnInit() {
    await this._loadIcon();
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['name'] && !changes['name'].isFirstChange()) {
      await this._loadIcon();
    }
  }

  private async _loadIcon() {
    const data = await loadIcon(this.name());
    const iconHtml = `<svg viewBox="0 0 ${data.width} ${data.height}">${data.body}</svg>`;
    this._iconHtml = this._sanitizer.bypassSecurityTrustHtml(iconHtml);
    this._cdr.markForCheck();
  }
}
