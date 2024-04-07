import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicColorPickerExampleComponent } from './basic-color-picker-example.component';

describe('BasicColorPickerExampleComponent', () => {
  let component: BasicColorPickerExampleComponent;
  let fixture: ComponentFixture<BasicColorPickerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicColorPickerExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicColorPickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
