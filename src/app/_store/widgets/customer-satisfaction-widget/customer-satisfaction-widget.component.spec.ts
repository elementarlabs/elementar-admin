import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSatisfactionWidgetComponent } from './customer-satisfaction-widget.component';

describe('CustomerSatisfactionWidgetComponent', () => {
  let component: CustomerSatisfactionWidgetComponent;
  let fixture: ComponentFixture<CustomerSatisfactionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSatisfactionWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerSatisfactionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
