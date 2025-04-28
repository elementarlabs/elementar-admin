import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOverlayWithBlurExampleComponent } from './card-overlay-with-blur-example.component';

describe('CardOverlayWithBlurExampleComponent', () => {
  let component: CardOverlayWithBlurExampleComponent;
  let fixture: ComponentFixture<CardOverlayWithBlurExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOverlayWithBlurExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOverlayWithBlurExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
