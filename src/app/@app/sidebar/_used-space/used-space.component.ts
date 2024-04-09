import { Component } from '@angular/core';
import { EmrGaugeModule } from '@components/gauge';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-used-space',
  standalone: true,
  imports: [
    EmrGaugeModule,
    MatIcon
  ],
  templateUrl: './used-space.component.html',
  styleUrl: './used-space.component.scss'
})
export class UsedSpaceComponent {

}
