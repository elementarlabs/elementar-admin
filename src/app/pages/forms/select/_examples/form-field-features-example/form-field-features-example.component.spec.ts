import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldFeaturesExampleComponent } from './form-field-features-example.component';

describe('FormFieldFeaturesExampleComponent', () => {
  let component: FormFieldFeaturesExampleComponent;
  let fixture: ComponentFixture<FormFieldFeaturesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldFeaturesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFieldFeaturesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
