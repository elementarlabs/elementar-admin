import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectionExampleComponent } from './multiple-selection-example.component';

describe('MultipleSelectionExampleComponent', () => {
  let component: MultipleSelectionExampleComponent;
  let fixture: ComponentFixture<MultipleSelectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleSelectionExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleSelectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
