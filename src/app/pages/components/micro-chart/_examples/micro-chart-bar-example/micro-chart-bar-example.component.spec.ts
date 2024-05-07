import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroChartBarExampleComponent } from './micro-chart-bar-example.component';

describe('MicroChartBarExampleComponent', () => {
  let component: MicroChartBarExampleComponent;
  let fixture: ComponentFixture<MicroChartBarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroChartBarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicroChartBarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
