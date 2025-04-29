import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingEmailActivationComponent } from './pending-email-activation.component';

describe('PendingEmailActivationComponent', () => {
  let component: PendingEmailActivationComponent;
  let fixture: ComponentFixture<PendingEmailActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingEmailActivationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PendingEmailActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
