import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithSelectionExampleComponent } from './table-with-selection-example.component';

describe('TableWithSelectionExampleComponent', () => {
  let component: TableWithSelectionExampleComponent;
  let fixture: ComponentFixture<TableWithSelectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithSelectionExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableWithSelectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
