import {
  booleanAttribute,
  ComponentRef,
  Directive,
  inject, input,
  OnChanges,
  PLATFORM_ID,
  Renderer2,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { MatButton } from '@angular/material/button';
import { isPlatformServer } from '@angular/common';

@Directive({
  selector: '[emrButtonLoading]',
  exportAs: 'emrButtonLoading'
})
export class ButtonDirective implements OnChanges {
  private _matButton = inject(MatButton);
  private _viewContainerRef = inject(ViewContainerRef);
  private _renderer = inject(Renderer2);
  private _spinner!: ComponentRef<MatProgressSpinner> | null;
  private _platformId = inject(PLATFORM_ID);

  loading = input(false, {
    alias: 'emrButtonLoading',
    transform: booleanAttribute
  });
  disabled = input(false, {
    transform: booleanAttribute
  });
  color = input<ThemePalette>();

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['loading']) {
      return;
    }

    if (isPlatformServer(this._platformId)) {
      return;
    }

    if (changes['loading'].currentValue) {
      this._matButton._elementRef.nativeElement.classList.add('emr-button-loading');
      this._matButton.disabled = true;
      this.createSpinner();
    } else if (!changes['loading'].firstChange) {
      this._matButton._elementRef.nativeElement.classList.remove('emr-button-loading');
      this._matButton.disabled = this.disabled();
      this.destroySpinner();
    }
  }

  private createSpinner(): void {
    if (!this._spinner) {
      this._spinner = this._viewContainerRef.createComponent(MatProgressSpinner);
      this._spinner.instance.color = this.color();
      this._spinner.instance.diameter = 20;
      this._spinner.instance.mode = 'indeterminate';
      this._renderer.appendChild(
        this._matButton._elementRef.nativeElement,
        this._spinner.instance._elementRef.nativeElement
      );
    }
  }

  private destroySpinner(): void {
    if (this._spinner) {
      this._spinner.destroy();
      this._spinner = null;
    }
  }
}
