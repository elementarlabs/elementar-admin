import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperLabelBottomPositionExampleComponent } from './stepper-label-bottom-position-example.component';

describe('StepperLabelBottomPositionExampleComponent', () => {
  let component: StepperLabelBottomPositionExampleComponent;
  let fixture: ComponentFixture<StepperLabelBottomPositionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperLabelBottomPositionExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperLabelBottomPositionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
