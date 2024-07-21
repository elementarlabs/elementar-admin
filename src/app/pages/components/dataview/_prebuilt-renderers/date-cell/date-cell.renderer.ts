import { Component, input } from '@angular/core';
import { DataViewCellRendererComponent } from '@elementar/components/data-view';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-cell',
  standalone: true,
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
