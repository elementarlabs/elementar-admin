import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSliderExampleComponent } from './basic-slider-example.component';

describe('BasicSliderExampleComponent', () => {
  let component: BasicSliderExampleComponent;
  let fixture: ComponentFixture<BasicSliderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSliderExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicSliderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
