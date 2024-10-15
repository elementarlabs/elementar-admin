import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChartWidgetSkeletonComponent } from './dashboard-chart-widget-skeleton.component';

describe('DashboardChartWidgetSkeletonComponent', () => {
  let component: DashboardChartWidgetSkeletonComponent;
  let fixture: ComponentFixture<DashboardChartWidgetSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardChartWidgetSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardChartWidgetSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
