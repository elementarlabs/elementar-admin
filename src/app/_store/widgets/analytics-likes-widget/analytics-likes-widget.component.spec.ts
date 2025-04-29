import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsLikesWidgetComponent } from './analytics-likes-widget.component';

describe('AnalyticsLikesWidgetComponent', () => {
  let component: AnalyticsLikesWidgetComponent;
  let fixture: ComponentFixture<AnalyticsLikesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsLikesWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsLikesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
