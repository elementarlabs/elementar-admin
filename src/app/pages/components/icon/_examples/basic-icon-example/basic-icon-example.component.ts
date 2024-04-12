import { Component } from '@angular/core';
import { IconComponent } from '@elementar/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-basic-icon-example',
  standalone: true,
  imports: [
    IconComponent,
    MatIcon
  ],
  templateUrl: './basic-icon-example.component.html',
  styleUrl: './basic-icon-example.component.scss'
})
export class BasicIconExampleComponent {

}
