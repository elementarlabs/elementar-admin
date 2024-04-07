import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperResponsiveExampleComponent } from './stepper-responsive-example.component';

describe('StepperResponsiveExampleComponent', () => {
  let component: StepperResponsiveExampleComponent;
  let fixture: ComponentFixture<StepperResponsiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperResponsiveExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperResponsiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
