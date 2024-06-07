import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWithHighlightExampleComponent } from './carousel-with-highlight-example.component';

describe('CarouselWithHighlightExampleComponent', () => {
  let component: CarouselWithHighlightExampleComponent;
  let fixture: ComponentFixture<CarouselWithHighlightExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselWithHighlightExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselWithHighlightExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
