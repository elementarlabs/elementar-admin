import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { DicebearComponent } from '@elementar-ui/components/avatar';
import { HorizontalDividerComponent } from '@elementar-ui/components/divider';

@Component({
  selector: 'emr-sidebar-toolbar',
  imports: [
    MatBadge,
    MatIcon,
    MatIconButton,
    MatTooltip,
    DicebearComponent,
    HorizontalDividerComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  subscription = 'Free';
  email = 'elementarlabs@gmail.com';
  name = 'Pavel Salauyou';
}
