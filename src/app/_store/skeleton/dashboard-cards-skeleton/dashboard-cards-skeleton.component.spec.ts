import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardsSkeletonComponent } from './dashboard-cards-skeleton.component';

describe('DashboardCardsSkeletonComponent', () => {
  let component: DashboardCardsSkeletonComponent;
  let fixture: ComponentFixture<DashboardCardsSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCardsSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCardsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
