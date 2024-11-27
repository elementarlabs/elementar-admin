import { booleanAttribute, Component, effect, ElementRef, inject, input, output } from '@angular/core';

@Component({
  selector: 'emr-expand',
  exportAs: 'emrExpand',
  templateUrl: './expand.component.html',
  styleUrl: './expand.component.scss',
  host: {
    'class': 'emr-expand',
    '[class.is-expanded]': '_expanded'
  }
})
export class ExpandComponent {
  private _elementRef = inject(ElementRef);

  expanded = input(false, {
    transform: booleanAttribute
  });
  color = input('');
  expandLabel = input('Show more');
  collapseLabel = input('Show less');
  showButtonIfExpanded = input(false, {
    transform: booleanAttribute
  });
  height = input<string>('');

  expandedChange = output<boolean>();

  protected _expanded = false;

  constructor() {
    effect(() => {
      this._expanded = this.expanded();
      (this._elementRef.nativeElement as HTMLElement).style.setProperty('--emr-expand-fade-color', this.color(), 'important');
      (this._elementRef.nativeElement as HTMLElement).style.setProperty('--emr-expand-expanded-height', this.height(), 'important');
    });
  }

  get api() {
    return {
      expand: () => this._expand(),
      collapse: () => this._collapse(),
      toggle: () => this._toggle()
    };
  }

  private _toggle() {
    this._expanded = !this._expanded;
    this.expandedChange.emit(this._expanded);
  }

  private _expand() {
    this._expanded = true;
    this.expandedChange.emit(this._expanded);
  }

  private _collapse() {
    this._expanded = false;
    this.expandedChange.emit(this._expanded);
  }
}
