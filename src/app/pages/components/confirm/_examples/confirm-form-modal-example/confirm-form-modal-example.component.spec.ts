import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmFormModalExampleComponent } from './confirm-form-modal-example.component';

describe('ConfirmFormModalExampleComponent', () => {
  let component: ConfirmFormModalExampleComponent;
  let fixture: ComponentFixture<ConfirmFormModalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmFormModalExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmFormModalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
