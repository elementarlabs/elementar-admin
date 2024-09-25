import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBrandColorsExampleComponent } from './basic-brand-colors-example.component';

describe('BasicBrandColorsExampleComponent', () => {
  let component: BasicBrandColorsExampleComponent;
  let fixture: ComponentFixture<BasicBrandColorsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicBrandColorsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicBrandColorsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
