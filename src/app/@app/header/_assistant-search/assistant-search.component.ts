import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CdkConnectedOverlay, CdkOverlayOrigin, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { SuggestionsComponent } from '@components/suggestions/suggestions/suggestions.component';
import { SuggestionBlockComponent } from '@components/suggestions/suggestion-block/suggestion-block.component';
import { SuggestionComponent } from '@components/suggestions/suggestion/suggestion.component';
import { MatButton, MatIconButton } from '@angular/material/button';
import { SuggestionIconDirective } from '@components/suggestions/suggestion-icon.directive';
import { EmrAvatarModule } from '@components/avatar';
import { SuggestionThumbDirective } from '@components/suggestions/suggestion-thumb.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assistant-search',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatIcon,
    CdkOverlayOrigin,
    CdkConnectedOverlay,
    SuggestionsComponent,
    SuggestionBlockComponent,
    SuggestionComponent,
    MatButton,
    SuggestionIconDirective,
    EmrAvatarModule,
    SuggestionThumbDirective,
    FormsModule,
    MatIconButton
  ],
  templateUrl: './assistant-search.component.html',
  styleUrl: './assistant-search.component.scss',
  host: {
    'class': 'assistant-search',
    '[class.has-dropdown]': '_isAttached'
  }
})
export class AssistantSearchComponent implements OnDestroy {
  private _overlay = inject(Overlay);
  private _viewContainerRef = inject(ViewContainerRef);
  private _elementRef = inject(ElementRef);
  protected _isAttached = false;
  private _overlayRef: OverlayRef;
  protected searchText = '';

  ngOnDestroy(): void {
    this.close();
  }

  focus(event: FocusEvent, suggestionDropdown: TemplateRef<any>) {
    if (this._isAttached) {
      return;
    }

    this._overlayRef = this._overlay.create({
      hasBackdrop: true,
      positionStrategy: this._overlay
        .position()
        .flexibleConnectedTo(this._elementRef)
        .withLockedPosition()
        .withGrowAfterOpen()
        .withPositions(
          [
            {
              originY: 'bottom',
              overlayY: 'top',
              originX: 'start',
              overlayX: 'start',
            }
          ]
        )
    });
    const portal = new TemplatePortal(suggestionDropdown, this._viewContainerRef);
    this._overlayRef.attach(portal);
    this._isAttached = true;
    this._overlayRef
      .outsidePointerEvents()
      .subscribe((event: MouseEvent) => {
        const target = event.target as HTMLElement;

        if (target.closest('.assistant-search')) {
          return;
        }

        this.close();
      })
    ;
  }

  close(): void {
    this._overlayRef?.dispose();
    this._isAttached = false;
  }

  clearText() {
    this.searchText = '';
  }
}
