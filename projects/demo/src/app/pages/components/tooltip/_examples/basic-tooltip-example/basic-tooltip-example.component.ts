import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-basic-tooltip-example',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './basic-tooltip-example.component.html',
  styleUrl: './basic-tooltip-example.component.scss'
})
export class BasicTooltipExampleComponent {

}
