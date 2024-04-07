import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithStickyFooterExampleComponent } from './table-with-sticky-footer-example.component';

describe('TableWithStickyFooterExampleComponent', () => {
  let component: TableWithStickyFooterExampleComponent;
  let fixture: ComponentFixture<TableWithStickyFooterExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithStickyFooterExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableWithStickyFooterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
