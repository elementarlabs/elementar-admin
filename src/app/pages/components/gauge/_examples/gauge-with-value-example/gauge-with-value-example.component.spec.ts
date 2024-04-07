import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeWithValueExampleComponent } from './gauge-with-value-example.component';

describe('GaugeWithValueExampleComponent', () => {
  let component: GaugeWithValueExampleComponent;
  let fixture: ComponentFixture<GaugeWithValueExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaugeWithValueExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaugeWithValueExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
