import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartLineCustomCurveExampleComponent } from './mchart-line-custom-curve-example.component';

describe('MchartLineCustomCurveExampleComponent', () => {
  let component: MchartLineCustomCurveExampleComponent;
  let fixture: ComponentFixture<MchartLineCustomCurveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartLineCustomCurveExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartLineCustomCurveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
