import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsPendingProjectsWidgetComponent } from './analytics-pending-projects-widget.component';

describe('AnalyticsPendingProjectsWidgetComponent', () => {
  let component: AnalyticsPendingProjectsWidgetComponent;
  let fixture: ComponentFixture<AnalyticsPendingProjectsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsPendingProjectsWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsPendingProjectsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
