import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCreditCardExampleComponent } from './bank-credit-card-example.component';

describe('BankCreditCardExampleComponent', () => {
  let component: BankCreditCardExampleComponent;
  let fixture: ComponentFixture<BankCreditCardExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankCreditCardExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankCreditCardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
