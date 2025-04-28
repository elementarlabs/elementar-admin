import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableTableExampleComponent } from './sortable-table-example.component';

describe('SortableTableExampleComponent', () => {
  let component: SortableTableExampleComponent;
  let fixture: ComponentFixture<SortableTableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortableTableExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortableTableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
