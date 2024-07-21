import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  Input,
  ViewChild
} from '@angular/core';
import { getState } from '@ngrx/signals';
import { GlobalState, GlobalStore } from '@elementar/components/core';

@Component({
  selector: 'app-screen-loader',
  standalone: true,
  imports: [],
  templateUrl: './screen-loader.component.html',
  styleUrl: './screen-loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenLoaderComponent {
  private _globalStore = inject(GlobalStore);

  @Input()
  src = 'assets/screen-loader.svg';

  @Input()
  srcDark = 'assets/screen-loader-dark.svg';

  @Input()
  loadingText: string;

  @ViewChild('loader', { static: true })
  private _loaderElement: ElementRef;

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

  private _show(): void {
    const loaderEl = this._loaderElement.nativeElement as HTMLElement;
    loaderEl.style['visibility'] = 'visible';
    loaderEl.style['zIndex'] = '9999999';
  }

  private _hide(): void {
    const loaderEl = this._loaderElement.nativeElement as HTMLElement;
    loaderEl.style['visibility'] = 'hidden';
    loaderEl.style['zIndex'] = '-9999999';
  }
}
