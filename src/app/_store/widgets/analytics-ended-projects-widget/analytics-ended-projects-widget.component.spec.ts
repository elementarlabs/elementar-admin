import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsEndedProjectsWidgetComponent } from './analytics-ended-projects-widget.component';

describe('AnalyticsEndedProjectsWidgetComponent', () => {
  let component: AnalyticsEndedProjectsWidgetComponent;
  let fixture: ComponentFixture<AnalyticsEndedProjectsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsEndedProjectsWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsEndedProjectsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
