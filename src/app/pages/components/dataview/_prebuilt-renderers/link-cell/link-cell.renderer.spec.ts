import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCellRenderer } from './link-cell.renderer';

describe('LinkCellRenderer', () => {
  let component: LinkCellRenderer;
  let fixture: ComponentFixture<LinkCellRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkCellRenderer]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkCellRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
