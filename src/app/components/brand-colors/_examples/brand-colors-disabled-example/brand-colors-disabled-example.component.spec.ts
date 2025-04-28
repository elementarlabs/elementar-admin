import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandColorsDisabledExampleComponent } from './brand-colors-disabled-example.component';

describe('BrandColorsDisabledExampleComponent', () => {
  let component: BrandColorsDisabledExampleComponent;
  let fixture: ComponentFixture<BrandColorsDisabledExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandColorsDisabledExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandColorsDisabledExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
