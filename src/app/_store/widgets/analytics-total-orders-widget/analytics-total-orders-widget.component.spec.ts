import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsTotalOrdersWidgetComponent } from './analytics-total-orders-widget.component';

describe('AnalyticsTotalOrdersWidgetComponent', () => {
  let component: AnalyticsTotalOrdersWidgetComponent;
  let fixture: ComponentFixture<AnalyticsTotalOrdersWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsTotalOrdersWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsTotalOrdersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
