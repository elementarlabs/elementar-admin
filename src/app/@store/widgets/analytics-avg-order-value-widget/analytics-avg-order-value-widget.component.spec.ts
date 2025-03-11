import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsAvgOrderValueWidgetComponent } from './analytics-avg-order-value-widget.component';

describe('AnalyticsAvgOrderValueWidgetComponent', () => {
  let component: AnalyticsAvgOrderValueWidgetComponent;
  let fixture: ComponentFixture<AnalyticsAvgOrderValueWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsAvgOrderValueWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsAvgOrderValueWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
