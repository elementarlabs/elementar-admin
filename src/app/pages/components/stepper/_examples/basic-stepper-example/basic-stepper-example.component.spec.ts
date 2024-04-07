import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStepperExampleComponent } from './basic-stepper-example.component';

describe('BasicStepperExampleComponent', () => {
  let component: BasicStepperExampleComponent;
  let fixture: ComponentFixture<BasicStepperExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicStepperExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicStepperExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
