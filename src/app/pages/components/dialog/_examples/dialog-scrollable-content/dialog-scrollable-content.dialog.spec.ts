import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogScrollableContentDialog } from './dialog-scrollable-content.dialog';

describe('DialogScrollableContentDialog', () => {
  let component: DialogScrollableContentDialog;
  let fixture: ComponentFixture<DialogScrollableContentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogScrollableContentDialog]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogScrollableContentDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
