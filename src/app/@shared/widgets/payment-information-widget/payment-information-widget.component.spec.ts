import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInformationWidgetComponent } from './payment-information-widget.component';

describe('PaymentInformationWidgetComponent', () => {
  let component: PaymentInformationWidgetComponent;
  let fixture: ComponentFixture<PaymentInformationWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentInformationWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentInformationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
