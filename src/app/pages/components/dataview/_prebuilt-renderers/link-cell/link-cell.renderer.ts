import { Component, input } from '@angular/core';
import { DataViewCellRendererComponent } from '@elementar-ui/components';
import { ContentFadeComponent } from '@elementar-ui/components';

@Component({
    selector: 'app-link-cell',
    imports: [
        ContentFadeComponent
    ],
    templateUrl: './link-cell.renderer.html',
    styleUrl: './link-cell.renderer.scss'
})
export class LinkCellRenderer implements DataViewCellRendererComponent {
  element = input();
  columnDef = input();
  fieldData = input<string>();
}
