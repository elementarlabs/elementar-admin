import { Component } from '@angular/core';
import { EmrTabPanelModule } from '@elementar/components/tab-panel';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-basic-tab-panel-example',
  standalone: true,
  imports: [
    EmrTabPanelModule,
    MatIcon
  ],
  templateUrl: './basic-tab-panel-example.component.html',
  styleUrl: './basic-tab-panel-example.component.scss'
})
export class BasicTabPanelExampleComponent {

}
