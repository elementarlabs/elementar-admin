import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthInfoExampleComponent } from './password-strength-info-example.component';

describe('PasswordStrengthInfoExampleComponent', () => {
  let component: PasswordStrengthInfoExampleComponent;
  let fixture: ComponentFixture<PasswordStrengthInfoExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordStrengthInfoExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordStrengthInfoExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
