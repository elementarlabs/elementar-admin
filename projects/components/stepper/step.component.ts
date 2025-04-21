import {
  Component,
  ChangeDetectionStrategy,
  input,
  signal,
  computed,
  effect,
  inject,
  DestroyRef
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'emr-step',
  exportAs: 'emrStep',
  template: `<ng-content/>`,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'emr-step',
    '[style.display]': 'isActive() ? "block" : "none"',
  }
})
export class StepComponent {
  /** Form control associated with this step */
  stepControl = input<AbstractControl | undefined>(undefined);
  /** Whether the step is optional */
  optional = input(false);

  /** Whether the user has interacted with this step (writable signal) */
  readonly interacted = signal(false);
  /** Whether this step is currently active (writable signal, controlled by Stepper) */
  readonly isActive = signal(false);
  /** Internal writable signal tracking the validity of the stepControl */
  private readonly _isValid = signal(true); // Default to true if no control

  private _destroyRef = inject(DestroyRef); // Inject DestroyRef for automatic cleanup

  constructor() {
    effect(() => {
      const control = this.stepControl(); // Read the input signal

      if (control) {
        // Set initial validity based on the control's current state when the effect runs
        this._isValid.set(control.valid);

        // Subscribe to statusChanges and update the _isValid signal
        // Use takeUntilDestroyed for automatic cleanup when the component is destroyed
        control.statusChanges.pipe(
          startWith(control.status), // Emit initial status immediately to sync _isValid
          takeUntilDestroyed(this._destroyRef) // Automatically unsubscribe on component destroy
        ).subscribe(() => {
          // Update the internal validity signal whenever the control's status changes
          this._isValid.set(control.valid);
        });

      } else {
        // If no control is provided, consider the step inherently valid for completion
        this._isValid.set(true);
      }
    });
  }

  /** Computed signal indicating if the step is completed */
  readonly completed = computed(() => {
    // A step is completed if it doesn't have a stepControl or
    // if the internal _isValid signal (reflecting the control's validity) is true.
    return !this.stepControl() || this._isValid();
  });

  /**
   * Checks if the step is currently valid.
   * Considers the validity of the associated stepControl if provided.
   * @returns boolean True if the step is valid, false otherwise.
   */
  public isValid(): boolean {
    return this._isValid(); // Directly return the tracked validity state
  }

  /** Resets the step's interacted state */
  reset(): void {
    this.interacted.set(false);
  }

  /** Sets the active state of the step */
  setActive(active: boolean): void {
    this.isActive.set(active);
  }

  /** Sets the interacted state of the step */
  setInteracted(interacted: boolean): void {
    this.interacted.set(interacted);
  }
}
