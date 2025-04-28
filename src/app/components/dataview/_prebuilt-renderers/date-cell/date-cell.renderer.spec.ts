import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCellRenderer } from './date-cell.renderer';

describe('DateCellRenderer', () => {
  let component: DateCellRenderer;
  let fixture: ComponentFixture<DateCellRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateCellRenderer]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateCellRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
