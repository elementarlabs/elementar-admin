import { Component, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription, MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-expansion-panel-expand-collapse-toggles-example',
  standalone: true,
  imports: [
    MatButton,
    MatExpansionPanel,
    MatAccordion,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatIcon,
    MatFormField,
    MatInput,
    MatDatepickerModule,
    MatLabel,
    MatExpansionPanelHeader
  ],
  templateUrl: './expansion-panel-expand-collapse-toggles-example.component.html',
  styleUrl: './expansion-panel-expand-collapse-toggles-example.component.scss',
  providers: [
    provideNativeDateAdapter()
  ]
})
export class ExpansionPanelExpandCollapseTogglesExampleComponent {
  @ViewChild(MatAccordion)
  accordion: MatAccordion;
}
