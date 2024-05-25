import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartPieWithLegendExampleComponent } from './mchart-pie-with-legend-example.component';

describe('MchartPieWithLegendExampleComponent', () => {
  let component: MchartPieWithLegendExampleComponent;
  let fixture: ComponentFixture<MchartPieWithLegendExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartPieWithLegendExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartPieWithLegendExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
