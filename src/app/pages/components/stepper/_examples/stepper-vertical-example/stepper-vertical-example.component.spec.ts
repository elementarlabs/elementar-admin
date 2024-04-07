import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperVerticalExampleComponent } from './stepper-vertical-example.component';

describe('StepperVerticalExampleComponent', () => {
  let component: StepperVerticalExampleComponent;
  let fixture: ComponentFixture<StepperVerticalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperVerticalExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperVerticalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
