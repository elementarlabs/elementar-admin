import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueePauseOnHoverExampleComponent } from './marquee-pause-on-hover-example.component';

describe('MarqueePauseOnHoverExampleComponent', () => {
  let component: MarqueePauseOnHoverExampleComponent;
  let fixture: ComponentFixture<MarqueePauseOnHoverExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueePauseOnHoverExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueePauseOnHoverExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
