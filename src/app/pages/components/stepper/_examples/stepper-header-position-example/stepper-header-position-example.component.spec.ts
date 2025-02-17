import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperHeaderPositionExampleComponent } from './stepper-header-position-example.component';

describe('StepperHeaderPositionExampleComponent', () => {
  let component: StepperHeaderPositionExampleComponent;
  let fixture: ComponentFixture<StepperHeaderPositionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperHeaderPositionExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperHeaderPositionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
