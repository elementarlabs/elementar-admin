import { Component } from '@angular/core';
import { EmrTabPanelModule } from '@components/tab-panel';
import { MatIcon } from '@angular/material/icon';
import { EmrPanelModule } from '@components/panel';

@Component({
  selector: 'app-tab-panel-with-panels-inside-example',
  standalone: true,
  imports: [
    EmrTabPanelModule,
    MatIcon,
    EmrPanelModule
  ],
  templateUrl: './tab-panel-with-panels-inside-example.component.html',
  styleUrl: './tab-panel-with-panels-inside-example.component.scss'
})
export class TabPanelWithPanelsInsideExampleComponent {

}
