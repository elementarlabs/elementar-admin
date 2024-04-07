import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperWithErrorsStateExampleComponent } from './stepper-with-errors-state-example.component';

describe('StepperWithErrorsStateExampleComponent', () => {
  let component: StepperWithErrorsStateExampleComponent;
  let fixture: ComponentFixture<StepperWithErrorsStateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperWithErrorsStateExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperWithErrorsStateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
