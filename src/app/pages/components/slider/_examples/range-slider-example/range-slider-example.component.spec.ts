import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSliderExampleComponent } from './range-slider-example.component';

describe('RangeSliderExampleComponent', () => {
  let component: RangeSliderExampleComponent;
  let fixture: ComponentFixture<RangeSliderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangeSliderExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RangeSliderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
