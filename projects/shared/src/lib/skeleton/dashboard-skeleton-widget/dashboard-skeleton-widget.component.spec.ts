import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSkeletonWidgetComponent } from './dashboard-skeleton-widget.component';

describe('DashboardSkeletonWidgetComponent', () => {
  let component: DashboardSkeletonWidgetComponent;
  let fixture: ComponentFixture<DashboardSkeletonWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSkeletonWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardSkeletonWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
