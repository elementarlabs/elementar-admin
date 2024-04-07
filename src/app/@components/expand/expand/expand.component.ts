import { booleanAttribute, Component, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core';

@Component({
  selector: 'emr-expand',
  exportAs: 'emrExpand',
  templateUrl: './expand.component.html',
  styleUrl: './expand.component.css',
  host: {
    'class': 'emr-expand',
    '[class.is-expanded]': 'expanded'
  }
})
export class ExpandComponent {
  private _elementRef = inject(ElementRef);

  @Input({ transform: booleanAttribute })
  expanded = false;

  @Input()
  set color(color: string) {
    (this._elementRef.nativeElement as HTMLElement).style.setProperty('--emr-expand-fade-color', color, 'important');
  }

  @Input()
  expandLabel = 'Expand';

  @Input()
  collapseLabel = 'Collapse';

  @Output()
  expandedChange = new EventEmitter<boolean>();

  get api() {
    return {
      expand: () => this._expand(),
      collapse: () => this._collapse(),
      toggle: () => this._toggle()
    };
  }

  private _toggle() {
    this.expanded = !this.expanded;
    this.expandedChange.emit(this.expanded);
  }

  private _expand() {
    this.expanded = true;
    this.expandedChange.emit(this.expanded);
  }

  private _collapse() {
    this.expanded = false;
    this.expandedChange.emit(this.expanded);
  }
}
