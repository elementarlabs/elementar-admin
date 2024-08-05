import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateProgressBarExampleComponent } from './intermediate-progress-bar-example.component';

describe('IntermediateProgressBarExampleComponent', () => {
  let component: IntermediateProgressBarExampleComponent;
  let fixture: ComponentFixture<IntermediateProgressBarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediateProgressBarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntermediateProgressBarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
