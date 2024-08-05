import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleAppearanceExampleComponent } from './button-toggle-appearance-example.component';

describe('ButtonToggleAppearanceExampleComponent', () => {
  let component: ButtonToggleAppearanceExampleComponent;
  let fixture: ComponentFixture<ButtonToggleAppearanceExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToggleAppearanceExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonToggleAppearanceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
