import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithFilteringExampleComponent } from './table-with-filtering-example.component';

describe('TableWithFilteringExampleComponent', () => {
  let component: TableWithFilteringExampleComponent;
  let fixture: ComponentFixture<TableWithFilteringExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithFilteringExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableWithFilteringExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
