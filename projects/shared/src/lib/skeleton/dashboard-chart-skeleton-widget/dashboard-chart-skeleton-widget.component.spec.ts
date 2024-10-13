import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChartSkeletonWidgetComponent } from './dashboard-chart-skeleton-widget.component';

describe('DashboardChartSkeletonWidgetComponent', () => {
  let component: DashboardChartSkeletonWidgetComponent;
  let fixture: ComponentFixture<DashboardChartSkeletonWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardChartSkeletonWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardChartSkeletonWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
