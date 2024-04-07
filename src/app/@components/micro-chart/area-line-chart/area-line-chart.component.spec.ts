import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaLineChartComponent } from './area-line-chart.component';

describe('AreaLineChartComponent', () => {
  let component: AreaLineChartComponent;
  let fixture: ComponentFixture<AreaLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaLineChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
