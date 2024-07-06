import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWithConfirmationComponent } from './dialog-with-confirmation.component';

describe('DialogWithConfirmationComponent', () => {
  let component: DialogWithConfirmationComponent;
  let fixture: ComponentFixture<DialogWithConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogWithConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogWithConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
