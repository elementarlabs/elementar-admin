import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAutocompleteExampleComponent } from './simple-autocomplete-example.component';

describe('SimpleAutocompleteExampleComponent', () => {
  let component: SimpleAutocompleteExampleComponent;
  let fixture: ComponentFixture<SimpleAutocompleteExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleAutocompleteExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleAutocompleteExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
