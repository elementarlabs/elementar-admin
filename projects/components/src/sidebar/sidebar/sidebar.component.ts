import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'emr-sidebar',
  exportAs: 'emrSidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  host: {
    'class': 'emr-sidebar',
    '[class.compact]': 'compact()',
    '[class.compact-hover]': '_compactHover',
    '(mouseenter)': 'mouseenter()',
    '(mouseleave)': 'mouseleave()'
  }
})
export class SidebarComponent {
  compact = input(false, {
    transform: booleanAttribute
  });
  protected _compactHover = false;

  get api() {
    return {
      isCompact: () => this.compact() || this._compactHover,
    }
  }

  protected mouseenter() {
    this._compactHover = true;
  }

  protected mouseleave() {
    this._compactHover = false;
  }
}
