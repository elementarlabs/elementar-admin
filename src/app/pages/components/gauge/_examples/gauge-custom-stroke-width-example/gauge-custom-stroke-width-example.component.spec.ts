import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeCustomStrokeWidthExampleComponent } from './gauge-custom-stroke-width-example.component';

describe('GaugeCustomStrokeWidthExampleComponent', () => {
  let component: GaugeCustomStrokeWidthExampleComponent;
  let fixture: ComponentFixture<GaugeCustomStrokeWidthExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaugeCustomStrokeWidthExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaugeCustomStrokeWidthExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
