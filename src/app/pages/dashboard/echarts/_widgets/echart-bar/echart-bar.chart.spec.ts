import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartBarChart } from './echart-bar.chart';

describe('EchartBarChart', () => {
  let component: EchartBarChart;
  let fixture: ComponentFixture<EchartBarChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EchartBarChart]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EchartBarChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
