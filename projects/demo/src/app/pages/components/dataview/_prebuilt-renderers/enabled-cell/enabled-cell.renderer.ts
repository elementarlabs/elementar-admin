import { Component, input } from '@angular/core';
import { DataViewCellRendererComponent } from '@elementar/components/data-view';
import { IconComponent } from '@elementar/components/icon';

@Component({
    selector: 'app-enabled-cell',
    imports: [
        IconComponent
    ],
    templateUrl: './enabled-cell.renderer.html',
    styleUrl: './enabled-cell.renderer.scss'
})
export class EnabledCellRenderer implements DataViewCellRendererComponent {
  element = input();
  columnDef = input();
  fieldData = input<string>();
}
