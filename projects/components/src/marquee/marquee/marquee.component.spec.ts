import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeComponent } from './marquee.component';

describe('MarqueeComponent', () => {
  let component: MarqueeComponent;
  let fixture: ComponentFixture<MarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
