import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordToggleVisibilityExampleComponent } from './password-toggle-visibility-example.component';

describe('PasswordToggleVisibilityExampleComponent', () => {
  let component: PasswordToggleVisibilityExampleComponent;
  let fixture: ComponentFixture<PasswordToggleVisibilityExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordToggleVisibilityExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordToggleVisibilityExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
