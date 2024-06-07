import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFadeEffectExampleComponent } from './carousel-fade-effect-example.component';

describe('CarouselFadeEffectExampleComponent', () => {
  let component: CarouselFadeEffectExampleComponent;
  let fixture: ComponentFixture<CarouselFadeEffectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselFadeEffectExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselFadeEffectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
