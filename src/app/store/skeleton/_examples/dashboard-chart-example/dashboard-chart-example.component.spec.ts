import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChartExampleComponent } from './dashboard-chart-example.component';

describe('DashboardChartExampleComponent', () => {
  let component: DashboardChartExampleComponent;
  let fixture: ComponentFixture<DashboardChartExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardChartExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardChartExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
