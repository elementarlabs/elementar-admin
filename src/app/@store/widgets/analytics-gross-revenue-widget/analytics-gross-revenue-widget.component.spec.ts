import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsGrossRevenueWidgetComponent } from './analytics-gross-revenue-widget.component';

describe('AnalyticsGrossRevenueWidgetComponent', () => {
  let component: AnalyticsGrossRevenueWidgetComponent;
  let fixture: ComponentFixture<AnalyticsGrossRevenueWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsGrossRevenueWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsGrossRevenueWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
