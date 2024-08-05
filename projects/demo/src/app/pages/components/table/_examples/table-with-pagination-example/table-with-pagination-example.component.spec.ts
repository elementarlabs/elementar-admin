import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithPaginationExampleComponent } from './table-with-pagination-example.component';

describe('TableWithPaginationExampleComponent', () => {
  let component: TableWithPaginationExampleComponent;
  let fixture: ComponentFixture<TableWithPaginationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithPaginationExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableWithPaginationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
