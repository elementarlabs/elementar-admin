import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToPremiumWidgetExampleComponent } from './go-to-premium-widget-example.component';

describe('GoToPremiumWidgetExampleComponent', () => {
  let component: GoToPremiumWidgetExampleComponent;
  let fixture: ComponentFixture<GoToPremiumWidgetExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoToPremiumWidgetExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoToPremiumWidgetExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
