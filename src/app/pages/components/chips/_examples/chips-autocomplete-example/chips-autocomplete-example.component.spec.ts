import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsAutocompleteExampleComponent } from './chips-autocomplete-example.component';

describe('ChipsAutocompleteExampleComponent', () => {
  let component: ChipsAutocompleteExampleComponent;
  let fixture: ComponentFixture<ChipsAutocompleteExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsAutocompleteExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipsAutocompleteExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
