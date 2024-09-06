import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeReverseExampleComponent } from './marquee-reverse-example.component';

describe('MarqueeReverseExampleComponent', () => {
  let component: MarqueeReverseExampleComponent;
  let fixture: ComponentFixture<MarqueeReverseExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueeReverseExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueeReverseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
