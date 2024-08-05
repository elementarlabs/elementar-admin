import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentActivityWidgetComponent } from './recent-activity-widget.component';

describe('RecentActivityWidgetComponent', () => {
  let component: RecentActivityWidgetComponent;
  let fixture: ComponentFixture<RecentActivityWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentActivityWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentActivityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
