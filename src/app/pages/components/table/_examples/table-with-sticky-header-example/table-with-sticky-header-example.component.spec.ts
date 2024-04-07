import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithStickyHeaderExampleComponent } from './table-with-sticky-header-example.component';

describe('TableWithStickyHeaderExampleComponent', () => {
  let component: TableWithStickyHeaderExampleComponent;
  let fixture: ComponentFixture<TableWithStickyHeaderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithStickyHeaderExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableWithStickyHeaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
