import { Component, Input } from '@angular/core';
import { EmrAvatarModule, InitialsPipe } from '@elementar/components';

@Component({
  selector: 'app-dv-author-renderer',
  standalone: true,
  imports: [
    EmrAvatarModule,
    InitialsPipe
  ],
  templateUrl: './dv-author-renderer.component.html',
  styleUrl: './dv-author-renderer.component.scss'
})
export class DvAuthorRendererComponent {
  @Input()
  element: any;

  @Input()
  columnDef: any;

  @Input()
  fieldData: any;
}
