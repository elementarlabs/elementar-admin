import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCommentsWidgetComponent } from './analytics-comments-widget.component';

describe('AnalyticsCommentsWidgetComponent', () => {
  let component: AnalyticsCommentsWidgetComponent;
  let fixture: ComponentFixture<AnalyticsCommentsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsCommentsWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsCommentsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
