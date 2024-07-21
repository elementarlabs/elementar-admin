import { Component, input } from '@angular/core';
import { DataViewCellRendererComponent, DataViewColumnDef } from '@elementar/components/data-view';
import { EmrAvatarModule } from '@elementar/components/avatar';
import { InitialsPipe } from '@elementar/components/core';

@Component({
  selector: 'app-user-cell',
  standalone: true,
  imports: [
    EmrAvatarModule,
    InitialsPipe
  ],
  templateUrl: './user-cell.renderer.html',
  styleUrl: './user-cell.renderer.scss'
})
export class UserCellRenderer implements DataViewCellRendererComponent {
  element = input<any>();
  columnDef = input<DataViewColumnDef>();
  fieldData = input();
}
