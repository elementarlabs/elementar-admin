import { Component, inject, signal } from '@angular/core';
import { LogoComponent } from '@elementar-ui/components/logo';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  imports: [
    LogoComponent,
    MatButton,
    MatProgressBar,
    MatRadioButton,
    MatRadioGroup,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss'
})
export class OnboardingComponent {
  private _formBuilder = inject(FormBuilder);

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

  form = this._formBuilder.group({
    usageType: ['', [Validators.required]],
    workType: ['none', [Validators.required]],
  });

  selectWorkType(workType: string) {
    this.form.patchValue({ workType });
  }
}
