import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsConversionRateWidgetComponent } from './analytics-conversion-rate-widget.component';

describe('AnalyticsConversionRateWidgetComponent', () => {
  let component: AnalyticsConversionRateWidgetComponent;
  let fixture: ComponentFixture<AnalyticsConversionRateWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsConversionRateWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsConversionRateWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
