import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithSelectionExampleComponent } from './list-with-selection-example.component';

describe('ListWithSelectionExampleComponent', () => {
  let component: ListWithSelectionExampleComponent;
  let fixture: ComponentFixture<ListWithSelectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWithSelectionExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListWithSelectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
