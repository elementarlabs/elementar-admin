import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailNavCustomizationExampleComponent } from './rail-nav-customization-example.component';

describe('RailNavCustomizationExampleComponent', () => {
  let component: RailNavCustomizationExampleComponent;
  let fixture: ComponentFixture<RailNavCustomizationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RailNavCustomizationExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RailNavCustomizationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
