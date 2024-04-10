import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardsSkeletonWidgetComponent } from './dashboard-cards-skeleton-widget.component';

describe('DashboardCardsSkeletonWidgetComponent', () => {
  let component: DashboardCardsSkeletonWidgetComponent;
  let fixture: ComponentFixture<DashboardCardsSkeletonWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCardsSkeletonWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardCardsSkeletonWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
