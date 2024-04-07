import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineTimestampExampleComponent } from './timeline-timestamp-example.component';

describe('TimelineTimestampExampleComponent', () => {
  let component: TimelineTimestampExampleComponent;
  let fixture: ComponentFixture<TimelineTimestampExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineTimestampExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineTimestampExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
