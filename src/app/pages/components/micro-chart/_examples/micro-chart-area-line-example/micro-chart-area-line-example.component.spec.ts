import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroChartAreaLineExampleComponent } from './micro-chart-area-line-example.component';

describe('MicroChartAreaLineExampleComponent', () => {
  let component: MicroChartAreaLineExampleComponent;
  let fixture: ComponentFixture<MicroChartAreaLineExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroChartAreaLineExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicroChartAreaLineExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
