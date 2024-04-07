import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithFixedColumnsExampleComponent } from './table-with-fixed-columns-example.component';

describe('TableWithFixedColumnsExampleComponent', () => {
  let component: TableWithFixedColumnsExampleComponent;
  let fixture: ComponentFixture<TableWithFixedColumnsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithFixedColumnsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableWithFixedColumnsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
