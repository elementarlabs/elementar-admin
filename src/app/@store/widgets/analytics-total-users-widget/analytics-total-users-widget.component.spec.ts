import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsTotalUsersWidgetComponent } from './analytics-total-users-widget.component';

describe('AnalyticsTotalUsersWidgetComponent', () => {
  let component: AnalyticsTotalUsersWidgetComponent;
  let fixture: ComponentFixture<AnalyticsTotalUsersWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsTotalUsersWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsTotalUsersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
