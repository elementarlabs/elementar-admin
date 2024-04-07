import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselControlsCustomPositionExampleComponent } from './carousel-controls-custom-position-example.component';

describe('CarouselControlsCustomPositionExampleComponent', () => {
  let component: CarouselControlsCustomPositionExampleComponent;
  let fixture: ComponentFixture<CarouselControlsCustomPositionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselControlsCustomPositionExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselControlsCustomPositionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
