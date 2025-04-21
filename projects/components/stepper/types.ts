import { StepComponent } from '@elementar-ui/components/stepper/step.component';

export interface StepperSelectionEvent {
  previouslySelectedIndex: number;
  previouslySelectedStep: StepComponent | undefined;
  selectedIndex: number;
  selectedStep: StepComponent;
}
