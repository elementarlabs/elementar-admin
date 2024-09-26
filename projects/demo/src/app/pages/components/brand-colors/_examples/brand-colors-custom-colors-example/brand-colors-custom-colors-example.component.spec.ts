import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandColorsCustomColorsExampleComponent } from './brand-colors-custom-colors-example.component';

describe('BrandColorsCustomColorsExampleComponent', () => {
  let component: BrandColorsCustomColorsExampleComponent;
  let fixture: ComponentFixture<BrandColorsCustomColorsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandColorsCustomColorsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandColorsCustomColorsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
