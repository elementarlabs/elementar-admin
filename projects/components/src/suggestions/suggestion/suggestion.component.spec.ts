import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionComponent } from './suggestion.component';

describe('SuggestionComponent', () => {
  let component: SuggestionComponent;
  let fixture: ComponentFixture<SuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
