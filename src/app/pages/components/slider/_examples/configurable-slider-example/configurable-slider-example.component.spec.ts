import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableSliderExampleComponent } from './configurable-slider-example.component';

describe('ConfigurableSliderExampleComponent', () => {
  let component: ConfigurableSliderExampleComponent;
  let fixture: ComponentFixture<ConfigurableSliderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurableSliderExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurableSliderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
