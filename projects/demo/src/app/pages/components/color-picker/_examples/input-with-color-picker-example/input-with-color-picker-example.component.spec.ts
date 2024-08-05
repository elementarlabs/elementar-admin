import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithColorPickerExampleComponent } from './input-with-color-picker-example.component';

describe('InputWithColorPickerExampleComponent', () => {
  let component: InputWithColorPickerExampleComponent;
  let fixture: ComponentFixture<InputWithColorPickerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWithColorPickerExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputWithColorPickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
