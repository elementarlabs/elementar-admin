import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMarqueeExampleComponent } from './basic-marquee-example.component';

describe('BasicMarqueeExampleComponent', () => {
  let component: BasicMarqueeExampleComponent;
  let fixture: ComponentFixture<BasicMarqueeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicMarqueeExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicMarqueeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
