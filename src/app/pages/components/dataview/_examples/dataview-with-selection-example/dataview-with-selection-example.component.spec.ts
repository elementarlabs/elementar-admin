import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewWithSelectionExampleComponent } from './dataview-with-selection-example.component';

describe('DataviewWithSelectionExampleComponent', () => {
  let component: DataviewWithSelectionExampleComponent;
  let fixture: ComponentFixture<DataviewWithSelectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataviewWithSelectionExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataviewWithSelectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
