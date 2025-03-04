import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionBlockComponent } from './suggestion-block.component';

describe('SuggestionBlockComponent', () => {
  let component: SuggestionBlockComponent;
  let fixture: ComponentFixture<SuggestionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestionBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
