import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menu-positioning-example',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './menu-positioning-example.component.html',
  styleUrl: './menu-positioning-example.component.scss'
})
export class MenuPositioningExampleComponent {

}
