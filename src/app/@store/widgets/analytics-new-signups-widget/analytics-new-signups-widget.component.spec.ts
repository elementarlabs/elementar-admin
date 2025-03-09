import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsNewSignupsWidgetComponent } from './analytics-new-signups-widget.component';

describe('AnalyticsNewSignupsWidgetComponent', () => {
  let component: AnalyticsNewSignupsWidgetComponent;
  let fixture: ComponentFixture<AnalyticsNewSignupsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsNewSignupsWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsNewSignupsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
