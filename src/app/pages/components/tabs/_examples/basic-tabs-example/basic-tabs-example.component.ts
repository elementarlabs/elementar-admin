import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-basic-tabs-example',
  standalone: true,
  imports: [
    MatTabsModule
  ],
  templateUrl: './basic-tabs-example.component.html',
  styleUrl: './basic-tabs-example.component.scss'
})
export class BasicTabsExampleComponent {

}
