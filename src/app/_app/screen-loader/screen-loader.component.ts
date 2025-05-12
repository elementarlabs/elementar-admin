import {
  Component,
  effect,
  ElementRef,
  inject, input,
  Input, numberAttribute, OnInit, Renderer2
} from '@angular/core';
import { getState } from '@ngrx/signals';
import { LogoComponent } from '@elementar-ui/components/logo';
import { GlobalState, GlobalStore } from '@elementar-ui/components/core';

@Component({
  selector: 'app-screen-loader',
  imports: [
    LogoComponent
  ],
  templateUrl: './screen-loader.component.html',
  styleUrl: './screen-loader.component.scss'
})
export class ScreenLoaderComponent implements OnInit {
  private _globalStore = inject(GlobalStore);
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);

  animationDuration = input(500, {
    transform: numberAttribute
  }); // in milliseconds

  @Input()
  src = 'assets/screen-loader.svg';

  @Input()
  srcDark = 'assets/screen-loader-dark.svg';

  @Input()
  loadingText!: string;

  constructor() {
    const initialState = getState<GlobalState>(this._globalStore);
    effect(() => {
      const currentState = getState<GlobalState>(this._globalStore);

      if (initialState.screenLoading === currentState.screenLoading) {
        return;
      }

      if (currentState.screenLoading) {
        this._show();
      } else {
        this._hide();
      }
    });
  }

  ngOnInit() {
    this._renderer.setProperty(
      this._elementRef.nativeElement, '--emr-screen-loader-animation-duration', (this.animationDuration() / 1000) + 's'
    );
  }

  private _show(): void {
    const loaderEl = this._elementRef.nativeElement as HTMLElement;
    this._renderer.setStyle(loaderEl, 'visibility', 'visible');
    this._renderer.setStyle(loaderEl, 'zIndex', '9999999');
  }

  private _hide(): void {
    console.log(22);
    const loaderEl = this._elementRef.nativeElement as HTMLElement;
    this._renderer.addClass(loaderEl, 'hide');
    setTimeout(() => {
      this._renderer.setStyle(loaderEl, 'visibility', 'hidden');
      this._renderer.setStyle(loaderEl, 'zIndex', '-9999999');
    }, this.animationDuration());
  }
}
