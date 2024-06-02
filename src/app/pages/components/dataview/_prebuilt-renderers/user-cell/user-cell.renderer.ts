import { Component, input, OnInit } from '@angular/core';
import { DataViewCellRendererComponent, EmrAvatarModule, InitialsPipe } from '@elementar/components';

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
export class UserCellRenderer implements DataViewCellRendererComponent, OnInit {
  element = input<any>();
  columnDef = input();
  fieldData = input();

  protected _user: any;

  ngOnInit() {
  }
}
