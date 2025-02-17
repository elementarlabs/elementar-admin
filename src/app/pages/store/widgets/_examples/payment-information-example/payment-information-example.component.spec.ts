import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInformationExampleComponent } from './payment-information-example.component';

describe('PaymentInformationExampleComponent', () => {
  let component: PaymentInformationExampleComponent;
  let fixture: ComponentFixture<PaymentInformationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentInformationExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentInformationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
