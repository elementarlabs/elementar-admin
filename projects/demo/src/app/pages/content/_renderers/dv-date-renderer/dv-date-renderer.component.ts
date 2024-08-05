import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dv-date-renderer',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './dv-date-renderer.component.html',
  styleUrl: './dv-date-renderer.component.scss'
})
export class DvDateRendererComponent {
  @Input()
  element: any;

  @Input()
  columnDef: any;

  @Input()
  fieldData: any;
}
