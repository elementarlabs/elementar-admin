import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandColorsAsFormControlExampleComponent } from './brand-colors-as-form-control-example.component';

describe('BrandColorsAsFormControlExampleComponent', () => {
  let component: BrandColorsAsFormControlExampleComponent;
  let fixture: ComponentFixture<BrandColorsAsFormControlExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandColorsAsFormControlExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandColorsAsFormControlExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
