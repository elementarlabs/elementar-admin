import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithSingleSelectionExampleComponent } from './list-with-single-selection-example.component';

describe('ListWithSingleSelectionExampleComponent', () => {
  let component: ListWithSingleSelectionExampleComponent;
  let fixture: ComponentFixture<ListWithSingleSelectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWithSingleSelectionExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListWithSingleSelectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
