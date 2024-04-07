import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPasswordStrengthExampleComponent } from './basic-password-strength-example.component';

describe('BasicPasswordStrengthExampleComponent', () => {
  let component: BasicPasswordStrengthExampleComponent;
  let fixture: ComponentFixture<BasicPasswordStrengthExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPasswordStrengthExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicPasswordStrengthExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
