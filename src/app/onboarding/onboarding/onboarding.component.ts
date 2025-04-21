import { Component, inject, signal } from '@angular/core';
import { LogoComponent } from '@elementar-ui/components/logo';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { StepperComponent, StepComponent } from '@elementar-ui/components/stepper';

@Component({
  selector: 'app-onboarding',
  imports: [
    LogoComponent,
    MatButton,
    MatProgressBar,
    MatRadioButton,
    MatRadioGroup,
    ReactiveFormsModule,
    RouterLink,
    StepperComponent,
    StepComponent
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss'
})
export class OnboardingComponent {
  private _formBuilder = inject(FormBuilder);

  selectedIndex = signal(0);
  usageTypes = signal([
    {
      type: 'work',
      name: 'For Work'
    },
    {
      type: 'education',
      name: 'For Education'
    },
    {
      type: 'personal',
      name: 'For Personal projects'
    }
  ]);
  workTypes = signal([
    {
      type: 'sales',
      name: 'Sales'
    },
    {
      type: 'design',
      name: 'Design'
    },
    {
      type: 'product',
      name: 'Product'
    },
    {
      type: 'marketing',
      name: 'Marketing'
    },
    {
      type: 'support',
      name: 'Support'
    },
  ]);
  steps = signal<FormGroup[]>([
    this._formBuilder.group({
      usageType: ['', [Validators.required]],
      workType: ['none', [Validators.required]],
    }),
  ]);

  selectWorkType(form: FormGroup, workType: string) {
    form.patchValue({ workType });
  }
}
