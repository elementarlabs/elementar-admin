import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneInputPreferredCountriesExampleComponent } from './phone-input-preferred-countries-example.component';

describe('PhoneInputPreferredCountriesExampleComponent', () => {
  let component: PhoneInputPreferredCountriesExampleComponent;
  let fixture: ComponentFixture<PhoneInputPreferredCountriesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneInputPreferredCountriesExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneInputPreferredCountriesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
