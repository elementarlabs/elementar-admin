import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnabledCellRenderer } from './enabled-cell.renderer';

describe('EnabledCellRenderer', () => {
  let component: EnabledCellRenderer;
  let fixture: ComponentFixture<EnabledCellRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnabledCellRenderer]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnabledCellRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
