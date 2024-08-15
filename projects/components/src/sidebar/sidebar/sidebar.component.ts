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
    '[class.compact]': 'compact()'
  }
})
export class SidebarComponent {
  compact = input(false, {
    transform: booleanAttribute
  });
}
