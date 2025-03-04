import { Component, input } from '@angular/core';
import { DataViewCellRendererComponent } from '@elementar-ui/components/data-view';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-cell',
  imports: [
    DatePipe
  ],
  templateUrl: './date-cell.renderer.html',
  styleUrl: './date-cell.renderer.scss'
})
export class DateCellRenderer implements DataViewCellRendererComponent {
  element = input();
  columnDef = input();
  fieldData = input<string>();
}
