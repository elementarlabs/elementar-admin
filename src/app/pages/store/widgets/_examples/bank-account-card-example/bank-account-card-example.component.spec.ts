import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountCardExampleComponent } from './bank-account-card-example.component';

describe('BankAccountCardExampleComponent', () => {
  let component: BankAccountCardExampleComponent;
  let fixture: ComponentFixture<BankAccountCardExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankAccountCardExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankAccountCardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
