import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerWithPopoverExampleComponent } from './color-picker-with-popover-example.component';

describe('ColorPickerWithPopoverExampleComponent', () => {
  let component: ColorPickerWithPopoverExampleComponent;
  let fixture: ComponentFixture<ColorPickerWithPopoverExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPickerWithPopoverExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorPickerWithPopoverExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
