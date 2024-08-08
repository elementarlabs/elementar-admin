import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { AsyncPipe } from '@angular/common';
import { MatBadge } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { DicebearComponent } from '@elementar/components/avatar';

@Component({
  selector: 'app-sidebar-toolbar',
  standalone: true,
  imports: [
    MatDivider,
    AsyncPipe,
    MatBadge,
    MatIcon,
    MatIconButton,
    MatTooltip,
    MatButton,
    DicebearComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
