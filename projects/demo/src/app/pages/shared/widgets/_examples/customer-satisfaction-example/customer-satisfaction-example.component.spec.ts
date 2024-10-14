import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSatisfactionExampleComponent } from './customer-satisfaction-example.component';

describe('CustomerSatisfactionExampleComponent', () => {
  let component: CustomerSatisfactionExampleComponent;
  let fixture: ComponentFixture<CustomerSatisfactionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSatisfactionExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSatisfactionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
