import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSuggestionsExampleComponent } from './basic-suggestions-example.component';

describe('BasicSuggestionsExampleComponent', () => {
  let component: BasicSuggestionsExampleComponent;
  let fixture: ComponentFixture<BasicSuggestionsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSuggestionsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicSuggestionsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
