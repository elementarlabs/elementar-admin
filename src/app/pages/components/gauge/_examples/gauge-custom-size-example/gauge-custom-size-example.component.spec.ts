import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeCustomSizeExampleComponent } from './gauge-custom-size-example.component';

describe('GaugeCustomSizeExampleComponent', () => {
  let component: GaugeCustomSizeExampleComponent;
  let fixture: ComponentFixture<GaugeCustomSizeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaugeCustomSizeExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaugeCustomSizeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
