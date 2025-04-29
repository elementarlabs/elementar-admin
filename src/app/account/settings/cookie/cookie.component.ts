import { Component } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader, MatExpansionPanelTitle
} from '@angular/material/expansion';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-cookie',
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatSlideToggle
  ],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.scss'
})
export class CookieComponent {

}
