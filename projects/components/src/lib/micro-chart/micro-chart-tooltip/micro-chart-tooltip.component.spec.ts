import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroChartTooltipComponent } from './micro-chart-tooltip.component';

describe('MicroChartTooltipComponent', () => {
  let component: MicroChartTooltipComponent;
  let fixture: ComponentFixture<MicroChartTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroChartTooltipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicroChartTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
