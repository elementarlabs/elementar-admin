import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandColorsComponent } from './brand-colors.component';

describe('BrandColorsComponent', () => {
  let component: BrandColorsComponent;
  let fixture: ComponentFixture<BrandColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
