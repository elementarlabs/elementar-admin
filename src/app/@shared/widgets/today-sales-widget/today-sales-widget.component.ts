import { Component } from '@angular/core';
import { EmrAvatarModule } from '@components/avatar';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-today-sales-widget',
  standalone: true,
  imports: [
    EmrAvatarModule,
    MatIcon,
    MatIconButton,
    MatButton
  ],
  templateUrl: './today-sales-widget.component.html',
  styleUrl: './today-sales-widget.component.scss'
})
export class TodaySalesWidgetComponent {

}
