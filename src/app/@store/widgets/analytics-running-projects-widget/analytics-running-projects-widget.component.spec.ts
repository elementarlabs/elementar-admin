import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsRunningProjectsWidgetComponent } from './analytics-running-projects-widget.component';

describe('AnalyticsRunningProjectsWidgetComponent', () => {
  let component: AnalyticsRunningProjectsWidgetComponent;
  let fixture: ComponentFixture<AnalyticsRunningProjectsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsRunningProjectsWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsRunningProjectsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
