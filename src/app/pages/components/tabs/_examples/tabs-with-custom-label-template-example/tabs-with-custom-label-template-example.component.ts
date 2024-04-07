import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tabs-with-custom-label-template-example',
  standalone: true,
  imports: [
    MatTabsModule,
    MatIconModule
  ],
  templateUrl: './tabs-with-custom-label-template-example.component.html',
  styleUrl: './tabs-with-custom-label-template-example.component.scss'
})
export class TabsWithCustomLabelTemplateExampleComponent {

}
