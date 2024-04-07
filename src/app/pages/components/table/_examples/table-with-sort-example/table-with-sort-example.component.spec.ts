import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithSortExampleComponent } from './table-with-sort-example.component';

describe('TableWithSortExampleComponent', () => {
  let component: TableWithSortExampleComponent;
  let fixture: ComponentFixture<TableWithSortExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithSortExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableWithSortExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
