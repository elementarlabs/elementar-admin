import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineMicroChartComponent } from './line-micro-chart.component';

describe('LineMicroChartComponent', () => {
  let component: LineMicroChartComponent;
  let fixture: ComponentFixture<LineMicroChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineMicroChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineMicroChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
