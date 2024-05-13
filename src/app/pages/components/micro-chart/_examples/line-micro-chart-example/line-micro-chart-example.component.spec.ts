import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineMicroChartExampleComponent } from './line-micro-chart-example.component';

describe('LineMicroChartExampleComponent', () => {
  let component: LineMicroChartExampleComponent;
  let fixture: ComponentFixture<LineMicroChartExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineMicroChartExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineMicroChartExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
