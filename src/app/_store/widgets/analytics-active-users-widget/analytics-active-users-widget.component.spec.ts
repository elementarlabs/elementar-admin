import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsActiveUsersWidgetComponent } from './analytics-active-users-widget.component';

describe('AnalyticsActiveUsersWidgetComponent', () => {
  let component: AnalyticsActiveUsersWidgetComponent;
  let fixture: ComponentFixture<AnalyticsActiveUsersWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsActiveUsersWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsActiveUsersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
