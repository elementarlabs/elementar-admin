import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorInsightsWidgetComponent } from './visitor-insights-widget.component';

describe('VisitorInsightsWidgetComponent', () => {
  let component: VisitorInsightsWidgetComponent;
  let fixture: ComponentFixture<VisitorInsightsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorInsightsWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitorInsightsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
