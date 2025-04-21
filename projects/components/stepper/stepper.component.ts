import {
  Component,
  Input,
  Output,
  EventEmitter,
  QueryList,
  ContentChildren,
  AfterContentInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  SimpleChanges,
  OnChanges // Added OnChanges to react to selectedIndex changes
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step.component'; // Import StepComponent
import { Subject } from 'rxjs';
import { takeUntil, startWith, delay } from 'rxjs/operators';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';

/**
 * Event object emitted by the Stepper component when the selected step has changed.
 */
export interface StepperSelectionEvent {
  /** Index of the previously selected step. */
  previouslySelectedIndex: number;
  /** The previously selected step component. */
  previouslySelectedStep: StepComponent | undefined; // Type changed to StepComponent
  /** Index of the currently selected step. */
  selectedIndex: number;
  /** The currently selected step component. */
  selectedStep: StepComponent; // Type changed to StepComponent
}

@Component({
  selector: 'emr-stepper',
  exportAs: 'emrStepper',
  standalone: true,
  imports: [CommonModule], // Needed for *ngFor in header example
  template: `
    <!-- Project the child emr-step components -->
    <ng-content select="emr-step"></ng-content>

    <!-- Example of optional step headers -->
    <!--
      <div class="emr-stepper-header">
         <div *ngFor="let step of _steps; let i = index"
              class="emr-step-header"
              [class.active]="selectedIndex === i"
              [class.completed]="step.completed && step.interacted"
              [class.optional]="step.optional"
              (click)="trySetIndex(i)">
           Step {{ i + 1 }}
           <span *ngIf="step.optional"> (Optional)</span>
         </div>
      </div>
     -->
  `,
  styles: [`
    :host {
      display: block; /* Component should be block-level */
    }
    /* Example styles for headers */
    /*
    .emr-stepper-header { display: flex; gap: 10px; margin-bottom: 15px; }
    .emr-step-header {
      padding: 5px 10px;
      border: 1px solid #ccc;
      cursor: pointer;
      background-color: #f0f0f0;
      transition: background-color 0.2s ease;
    }
    .emr-step-header:hover { background-color: #e0e0e0; }
    .emr-step-header.active { background-color: #007bff; color: white; border-color: #007bff; }
    .emr-step-header.completed { border-left: 3px solid green; }
    */
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements AfterContentInit, OnDestroy, OnChanges {
  /** Subject for managing subscriptions that should be cleaned up on destroy. */
  private readonly _destroyed = new Subject<void>();

  /** Collection of child StepComponent instances. */
  @ContentChildren(StepComponent, { descendants: true }) _steps!: QueryList<StepComponent>;

  /** Internal storage for the linear mode flag. */
  private _linear = false;
  /** Whether the stepper should operate in linear mode. */
  @Input()
  get linear(): boolean { return this._linear; }
  set linear(value: any) { this._linear = coerceBooleanProperty(value); }

  /** Internal storage for the selected step index. */
  private _selectedIndex = 0;
  /** The index of the active step. */
  @Input()
  get selectedIndex(): number { return this._selectedIndex; }
  set selectedIndex(index: any) {
    const newIndex = coerceNumberProperty(index, 0);
    // If the component is initialized and the index actually changed,
    // try to set it. Otherwise, save it for initialization.
    if (this._stepsInitialized && this._selectedIndex !== newIndex) {
      this._trySetIndex(newIndex);
    } else if (!this._stepsInitialized) {
      this._selectedIndex = newIndex;
    }
  }

  /** The currently selected StepComponent instance. */
  get selected(): StepComponent | undefined {
    // Return the step only if initialized and steps are available
    return this._stepsInitialized ? this._steps?.toArray()[this._selectedIndex] : undefined;
  }

  /** Event emitted when the selected step changes. */
  @Output() readonly selectionChange = new EventEmitter<StepperSelectionEvent>();

  /** Flag indicating if AfterContentInit has run and _steps are available. */
  private _stepsInitialized = false;

  constructor(private _cdr: ChangeDetectorRef) {}

  /** Lifecycle hook that reacts to changes in data-bound input properties. */
  ngOnChanges(changes: SimpleChanges): void {
    // If selectedIndex changed externally AFTER initialization
    if (changes['selectedIndex'] && !changes['selectedIndex'].firstChange && this._stepsInitialized) {
      const newIndex = coerceNumberProperty(changes['selectedIndex'].currentValue, 0);
      this._trySetIndex(newIndex);
    }
    // Can add reaction to 'linear' changes if needed
  }

  /** Lifecycle hook called after Angular projects content into the component's view. */
  ngAfterContentInit(): void {
    this._stepsInitialized = true;

    // Subscribe to QueryList changes (adding/removing steps)
    this._steps.changes
      .pipe(
        startWith(this._steps), // Immediately process the current state
        // delay(0), // Uncomment if experiencing issues with child component initialization timing
        takeUntil(this._destroyed)
      )
      .subscribe(() => {
        this._resetStepsState(); // Reset 'interacted' state for all steps
        this._validateAndAdjustIndex(); // Check and correct selectedIndex if needed
        this._updateStepsActiveState(); // Set the active state for all steps
        this._cdr.markForCheck(); // Mark the component for change detection
      });

    // Perform initial index validation and state setup after steps are first detected
    if (this._steps.length > 0) {
      this._validateAndAdjustIndex();
      this._updateStepsActiveState();
      this._markCurrentAsInteracted(); // Mark the initial step as interacted
      this._cdr.markForCheck();
    }
  }

  /** Lifecycle hook that cleans up resources when the component is destroyed. */
  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  /** Checks if selectedIndex is valid and clamps it if it's out of bounds. */
  private _validateAndAdjustIndex(): void {
    if (!this._steps || this._steps.length === 0) {
      this._selectedIndex = 0; // Or -1 if indicating no steps is desired
      return;
    }
    const newIndex = Math.max(0, Math.min(this._selectedIndex, this._steps.length - 1));
    if (newIndex !== this._selectedIndex) {
      // console.warn(`Stepper: Selected index (${this._selectedIndex}) was adjusted to ${newIndex}.`);
      this._selectedIndex = newIndex;
      // Event is not emitted here as this is an adjustment, not a user action
    }
  }

  /** Marks the currently selected step component as interacted. */
  private _markCurrentAsInteracted(): void {
    if (this.selected) {
      this.selected.setInteracted(true);
    }
  }

  /** Resets the 'interacted' state of all step components. */
  private _resetStepsState(): void {
    this._steps?.forEach(step => step.reset());
  }

  /** Updates the active state (visibility) for all child step components. */
  private _updateStepsActiveState(): void {
    this._steps?.forEach((step, index) => {
      // Tell each step if it should be active based on the current selectedIndex
      step.setActive(index === this._selectedIndex);
    });
  }

  // --- Public API Methods ---

  /** Navigates to the next step if possible. */
  next(): void {
    // Check if navigation is allowed using the public method
    if (this.canMoveNext()) {
      this._updateSelectedIndex(this._selectedIndex + 1);
    }
  }

  /** Navigates to the previous step if possible. */
  previous(): void {
    // Moving back is generally always allowed if not on the first step
    if (this._selectedIndex > 0) {
      this._updateSelectedIndex(this._selectedIndex - 1);
    }
  }

  /** Resets the stepper to the first step. */
  reset(): void {
    const previouslySelectedIndex = this._selectedIndex;
    const previouslySelectedStep = this.selected;

    // If already on the first step, just reset the state without changing index
    if (previouslySelectedIndex === 0) {
      this._resetStepsState();
      this._markCurrentAsInteracted(); // Mark the first step as interacted
      this._cdr.markForCheck();
      return;
    }

    this._selectedIndex = 0;
    this._resetStepsState();
    this._markCurrentAsInteracted();
    this._updateStepsActiveState(); // Update step visibility

    // Emit the selection change event
    this.selectionChange.emit({
      previouslySelectedIndex,
      previouslySelectedStep,
      selectedIndex: this._selectedIndex,
      selectedStep: this.selected!, // We know selected is not null after setting index to 0
    });

    this._cdr.markForCheck();
  }

  /** Attempts to set the selected index programmatically (e.g., for header navigation). */
  trySetIndex(index: number): void {
    this._trySetIndex(index);
  }

  /**
   * Checks if the user can navigate to the next step.
   * Considers linear mode and the state of the current step.
   * @returns boolean True if navigation to the next step is allowed.
   */
  public canMoveNext(): boolean {
    const stepsArray = this._steps?.toArray();
    // Cannot move next if there are no steps or already on the last step
    if (!stepsArray || this._selectedIndex >= stepsArray.length - 1) {
      return false;
    }
    // If not in linear mode or the current step is somehow undefined, allow moving
    if (!this._linear || !this.selected) {
      return true;
    }
    // In linear mode, check if the current step is completed or optional
    return this.selected.completed || this.selected.optional;
  }

  // --- Internal Methods ---

  /** Internal method to attempt setting the index with validation. */
  private _trySetIndex(index: number): void {
    const newIndex = coerceNumberProperty(index, 0);

    if (!this._stepsInitialized) {
      // console.warn('Stepper: Attempted to set index before steps were initialized.');
      return;
    }

    const stepsArray = this._steps.toArray();
    // Check if the new index is valid, different from the current, and navigable
    if (newIndex >= 0 && newIndex < stepsArray.length && newIndex !== this._selectedIndex) {
      if (this._canGoToIndex(newIndex)) { // Check linear mode constraints
        this._updateSelectedIndex(newIndex);
      } else {
        // console.warn(`Stepper: Cannot navigate to index ${newIndex} in linear mode.`);
      }
    }
  }

  /** Checks if navigation to a specific index is permitted (mainly for linear mode). */
  private _canGoToIndex(targetIndex: number): boolean {
    // Always allow moving backward or if not in linear mode
    if (!this._linear || !this._steps || targetIndex <= this._selectedIndex) {
      return true;
    }
    // Check all steps between the current and target index (exclusive)
    const stepsArray = this._steps.toArray();
    for (let i = this._selectedIndex; i < targetIndex; i++) {
      const step = stepsArray[i];
      // If an intermediate step is not completed and not optional, navigation is blocked
      if (!step || (!step.completed && !step.optional)) {
        return false;
      }
    }
    return true; // All intermediate steps are passed
  }

  /** Core method to update the selected index and related states after validation. */
  private _updateSelectedIndex(newIndex: number): void {
    const stepsArray = this._steps?.toArray();
    // Double-check validity in case of async issues
    if (!stepsArray || newIndex < 0 || newIndex >= stepsArray.length || newIndex === this._selectedIndex) {
      return;
    }

    const previouslySelectedIndex = this._selectedIndex;
    const previouslySelectedStep = stepsArray[previouslySelectedIndex];

    this._selectedIndex = newIndex;
    const selectedStep = stepsArray[this._selectedIndex];

    // Mark the newly selected step as interacted
    if (selectedStep) {
      selectedStep.setInteracted(true);
    }

    this._updateStepsActiveState(); // Update visibility for all steps

    // Emit the selection change event
    this.selectionChange.emit({
      previouslySelectedIndex,
      previouslySelectedStep,
      selectedIndex: this._selectedIndex,
      selectedStep,
    });

    this._cdr.markForCheck(); // Mark for change detection
  }
}
