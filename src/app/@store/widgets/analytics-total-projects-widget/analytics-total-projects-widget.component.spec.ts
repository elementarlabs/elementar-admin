import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsTotalProjectsWidgetComponent } from './analytics-total-projects-widget.component';

describe('AnalyticsTotalProjectsWidgetComponent', () => {
  let component: AnalyticsTotalProjectsWidgetComponent;
  let fixture: ComponentFixture<AnalyticsTotalProjectsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsTotalProjectsWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsTotalProjectsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
