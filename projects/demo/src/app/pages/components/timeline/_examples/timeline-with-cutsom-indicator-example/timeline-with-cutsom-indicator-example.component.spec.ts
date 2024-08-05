import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineWithCutsomIndicatorExampleComponent } from './timeline-with-cutsom-indicator-example.component';

describe('TimelineWithCutsomIndicatorExampleComponent', () => {
  let component: TimelineWithCutsomIndicatorExampleComponent;
  let fixture: ComponentFixture<TimelineWithCutsomIndicatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineWithCutsomIndicatorExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineWithCutsomIndicatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
