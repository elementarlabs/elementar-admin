import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOverlayWithTranslateExampleComponent } from './card-overlay-with-translate-example.component';

describe('CardOverlayWithTranslateExampleComponent', () => {
  let component: CardOverlayWithTranslateExampleComponent;
  let fixture: ComponentFixture<CardOverlayWithTranslateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOverlayWithTranslateExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOverlayWithTranslateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
