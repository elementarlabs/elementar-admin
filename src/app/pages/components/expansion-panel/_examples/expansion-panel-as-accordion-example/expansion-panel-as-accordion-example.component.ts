import { Component } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelActionRow, MatExpansionPanelDescription,
  MatExpansionPanelHeader, MatExpansionPanelTitle
} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-expansion-panel-as-accordion-example',
  standalone: true,
  imports: [
    MatExpansionPanelHeader,
    MatAccordion,
    MatExpansionPanel,
    MatIcon,
    MatFormField,
    MatInput,
    MatButton,
    MatDatepickerModule,
    MatExpansionPanelActionRow,
    MatLabel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription
  ],
  templateUrl: './expansion-panel-as-accordion-example.component.html',
  styleUrl: './expansion-panel-as-accordion-example.component.scss',
  providers: [
    provideNativeDateAdapter()
  ]
})
export class ExpansionPanelAsAccordionExampleComponent {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
