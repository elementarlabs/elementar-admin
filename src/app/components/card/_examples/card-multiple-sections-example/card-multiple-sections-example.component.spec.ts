import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMultipleSectionsExampleComponent } from './card-multiple-sections-example.component';

describe('CardMultipleSectionsExampleComponent', () => {
  let component: CardMultipleSectionsExampleComponent;
  let fixture: ComponentFixture<CardMultipleSectionsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMultipleSectionsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMultipleSectionsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
