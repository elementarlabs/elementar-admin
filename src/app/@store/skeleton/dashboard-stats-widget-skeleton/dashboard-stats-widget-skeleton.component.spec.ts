import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStatsWidgetSkeletonComponent } from './dashboard-stats-widget-skeleton.component';

describe('DashboardStatsWidgetSkeletonComponent', () => {
  let component: DashboardStatsWidgetSkeletonComponent;
  let fixture: ComponentFixture<DashboardStatsWidgetSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardStatsWidgetSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardStatsWidgetSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
