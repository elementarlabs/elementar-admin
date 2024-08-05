import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCellRenderer } from './user-cell.renderer';

describe('UserCellRenderer', () => {
  let component: UserCellRenderer;
  let fixture: ComponentFixture<UserCellRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCellRenderer]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCellRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
