import {
  Component,
  Input,
  OnDestroy,
  HostBinding, // Used to control visibility via CSS class
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for ng-content
import { AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'emr-step', // Component selector
  exportAs: 'emrStep', // Kept for compatibility if used somewhere
  standalone: true,
  imports: [CommonModule], // Needed for ng-content
  template: `
    <!-- Simply project the content, visibility is controlled by the host -->
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: block; /* Components are inline by default */
      /* Step is hidden by default - controlled via [style.display] */
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent implements OnDestroy {
  /** Form control associated with this step */
  @Input() stepControl?: AbstractControl;

  /** Whether the step is optional */
  @Input() optional: boolean = false;

  // --- Step State ---
  /** Whether the user has interacted with this step */
  interacted = false;

  // --- Visibility Control ---
  /** Flag indicating if the step is active (controlled externally by StepperComponent) */
  private _isActive = false;

  /** Binds the display style to the host for visibility control via CSS */
  @HostBinding('style.display') get displayStyle(): string {
    return this._isActive ? 'block' : 'none';
  }

  /** Subject for managing subscriptions cleanup */
  private readonly _destroyed = new Subject<void>();

  constructor(private _cdr: ChangeDetectorRef) {}

  /** Getter to check if the step is completed */
  get completed(): boolean {
    // A step is considered completed if it doesn't have a stepControl
    // or if the associated stepControl is valid.
    return !this.stepControl || this.stepControl.valid;
  }

  /** Resets the step's state */
  reset(): void {
    this.interacted = false;
    // Do not reset _isActive here, as Stepper controls this
  }

  /** Public method to set the step's active state (called by StepperComponent) */
  setActive(isActive: boolean): void {
    if (this._isActive !== isActive) {
      this._isActive = isActive;
      this._cdr.markForCheck(); // Mark for check as the host state ([style.display]) changed
    }
  }

  /** Public method to set the interacted flag (called by StepperComponent) */
  setInteracted(interacted: boolean): void {
    // Can add a check to avoid marking for check unnecessarily
    if (this.interacted !== interacted) {
      this.interacted = interacted;
      // If interacted affects the StepComponent template (e.g., a class), markForCheck is needed.
      // In this case, interacted is only used by StepperComponent.
    }
  }

  /** Clean up on component destruction */
  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
