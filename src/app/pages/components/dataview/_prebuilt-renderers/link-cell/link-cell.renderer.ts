import { Component, input } from '@angular/core';
import { DataViewCellRendererComponent } from '@elementar/components/data-view';

@Component({
  selector: 'app-link-cell',
  standalone: true,
  imports: [],
  templateUrl: './link-cell.renderer.html',
  styleUrl: './link-cell.renderer.scss'
})
export class LinkCellRenderer implements DataViewCellRendererComponent {
  element = input();
  columnDef = input();
  fieldData = input<string>();
}
