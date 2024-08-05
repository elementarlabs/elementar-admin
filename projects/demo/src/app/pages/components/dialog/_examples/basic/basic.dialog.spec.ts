import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDialog } from './basic.dialog';

describe('BasicDialog', () => {
  let component: BasicDialog;
  let fixture: ComponentFixture<BasicDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDialog]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
