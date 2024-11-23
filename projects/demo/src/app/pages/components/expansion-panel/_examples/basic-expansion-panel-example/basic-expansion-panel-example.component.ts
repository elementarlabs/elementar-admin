import { Component } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader, MatExpansionPanelTitle
} from '@angular/material/expansion';

@Component({
    selector: 'app-basic-expansion-panel-example',
    imports: [
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatExpansionPanelDescription,
        MatExpansionPanelTitle
    ],
    templateUrl: './basic-expansion-panel-example.component.html',
    styleUrl: './basic-expansion-panel-example.component.scss'
})
export class BasicExpansionPanelExampleComponent {
  panelOpenState = false;
}
