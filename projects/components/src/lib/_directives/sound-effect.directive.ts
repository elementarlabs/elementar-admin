import { afterNextRender, DestroyRef, Directive, ElementRef, inject, input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[emrSoundEffect]',
  standalone: true
})
export class SoundEffectDirective {
  soundSrc = input.required<string>();

  private _elementRef = inject(ElementRef);
  private _destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      this._init();
    });
  }

  private _init() {
    const audio = new Audio(this.soundSrc());
    audio.volume = 0.5;
    fromEvent(this._elementRef.nativeElement, 'click')
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe(async (e) => {
        await audio.play();
      })
    ;
  }
}
