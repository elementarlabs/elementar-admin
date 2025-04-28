import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneInputOnlyCountriesExampleComponent } from './phone-input-only-countries-example.component';

describe('PhoneInputOnlyCountriesExampleComponent', () => {
  let component: PhoneInputOnlyCountriesExampleComponent;
  let fixture: ComponentFixture<PhoneInputOnlyCountriesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneInputOnlyCountriesExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneInputOnlyCountriesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
