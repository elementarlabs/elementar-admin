import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsFollowersWidgetComponent } from './analytics-followers-widget.component';

describe('AnalyticsFollowersWidgetComponent', () => {
  let component: AnalyticsFollowersWidgetComponent;
  let fixture: ComponentFixture<AnalyticsFollowersWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsFollowersWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsFollowersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
