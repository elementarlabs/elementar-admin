import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFooterLoadingExampleComponent } from './card-footer-loading-example.component';

describe('CardFooterLoadingExampleComponent', () => {
  let component: CardFooterLoadingExampleComponent;
  let fixture: ComponentFixture<CardFooterLoadingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFooterLoadingExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFooterLoadingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
