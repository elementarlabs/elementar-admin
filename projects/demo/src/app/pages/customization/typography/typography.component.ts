import { Component } from '@angular/core';
import { EmrAlertModule } from '@elementar/components/alert';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [
    EmrAlertModule,
    FormsModule,
  ],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss'
})
export class TypographyComponent {

}
