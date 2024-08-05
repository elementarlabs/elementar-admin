import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleSelectionModeExampleComponent } from './button-toggle-selection-mode-example.component';

describe('ButtonToggleSelectionModeExampleComponent', () => {
  let component: ButtonToggleSelectionModeExampleComponent;
  let fixture: ComponentFixture<ButtonToggleSelectionModeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToggleSelectionModeExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonToggleSelectionModeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
