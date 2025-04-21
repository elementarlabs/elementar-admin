import {
  Component,
  ChangeDetectionStrategy,
  effect,
  computed,
  input,
  model,
  contentChildren,
} from '@angular/core';
import { StepComponent } from './step.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'emr-stepper',
  exportAs: 'emrStepper',
  standalone: true,
  template: `<ng-content select="emr-step"/>`,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'emr-stepper',
  },
})
export class StepperComponent {
  /** Whether the stepper should operate in linear mode. */
  readonly linear = input(false, {
    transform: coerceBooleanProperty
  });
  /** The index of the active step (two-way bound). */
  readonly selectedIndex = model(0);

  /** Collection of child StepComponent instances. */
  readonly steps = contentChildren(StepComponent);

  /** Computed signal for the total number of steps. */
  readonly stepsCount = computed(() => {
    return this.steps()?.length ?? 0;
  });

  /** The currently selected StepComponent instance. */
  readonly selected = computed(() => {
    const index = this.selectedIndex();
    const stepList = this.steps();
    // Use the stepsCount() computed signal for checking length
    return stepList && index >= 0 && index < this.stepsCount() ? stepList[index] : undefined;
  });

  /** Checks if the user can navigate to the next step. */
  readonly canMoveNext = computed(() => {
    const index = this.selectedIndex();
    // Use stepsCount() signal
    const totalSteps = this.stepsCount();
    const currentSelected = this.selected();
    const isLinear = this.linear();

    // Cannot move next if there are no steps or already on the last step
    if (totalSteps === 0 || index >= totalSteps - 1) {
      return false;
    }
    if (!isLinear || !currentSelected) {
      return true;
    }
    return currentSelected.completed() || currentSelected.optional();
  });

  /** Computed signal indicating if the current step is the first step. */
  readonly isFirstStep = computed(() => {
    const index = this.selectedIndex();
    // Use stepsCount() signal
    return index === 0 && this.stepsCount() > 0;
  });

  /** Computed signal indicating if the current step is the last step. */
  readonly isLastStep = computed(() => {
    const index = this.selectedIndex();
    // Use stepsCount() signal
    const totalSteps = this.stepsCount();
    return totalSteps > 0 && index === totalSteps - 1;
  });

  /** Computed signal calculating the progress percentage. */
  readonly progressPercent = computed(() => {
    const totalSteps = this.stepsCount();
    const index = this.selectedIndex();

    if (totalSteps === 0) {
      return 0;
    }

    const progress = (100 / totalSteps) * (index + 1);
    return Math.max(0, Math.min(100, progress));
  });

  constructor() {
    effect(() => {
      const currentSteps = this.steps();
      const currentIndex = this.selectedIndex();
      currentSteps.forEach((step, index) => step.setActive(index === currentIndex));
    });

    effect((onCleanup) => { // Mark as interacted
      const currentSelected = this.selected();
      if (currentSelected && !currentSelected.interacted()) {
        currentSelected.setInteracted(true);
      }
    });

    effect(() => { // Validate index
      const totalSteps = this.stepsCount();
      const currentIndex = this.selectedIndex();

      if (totalSteps > 0) {
        const newIndex = Math.max(0, Math.min(currentIndex, totalSteps - 1));
        if (newIndex !== currentIndex) this.selectedIndex.set(newIndex);
      } else if (currentIndex !== 0) {
        this.selectedIndex.set(0);
      }
    });
  }

  /** Navigates to the next step if possible. */
  next(): void {
    if (this.canMoveNext()) {
      this.selectedIndex.update(i => i + 1);
    }
  }

  /** Navigates to the previous step if possible. */
  previous(): void {
    // Use renamed computed signal for check
    if (!this.isFirstStep()) {
      this.selectedIndex.update(i => i - 1);
    }
  }

  /** Resets the stepper to the first step. */
  reset(): void {
    this.steps().forEach(step => step.reset());
    this.selectedIndex.set(0);
  }
}
