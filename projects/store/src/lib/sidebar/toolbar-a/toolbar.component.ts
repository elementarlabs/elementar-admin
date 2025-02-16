import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { DicebearComponent } from '@elementar-ui/components';

@Component({
  selector: 'emr-sidebar-toolbar-a',
  imports: [
    MatIcon,
    MatButton,
    DicebearComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarAComponent {

}
