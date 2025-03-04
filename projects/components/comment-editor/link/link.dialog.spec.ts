import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDialog } from './link.dialog';

describe('LinkDialog', () => {
  let component: LinkDialog;
  let fixture: ComponentFixture<LinkDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
