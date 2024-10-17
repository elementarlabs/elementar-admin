import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgClickRateWidgetComponent } from './avg-click-rate-widget.component';

describe('AvgClickRateWidgetComponent', () => {
  let component: AvgClickRateWidgetComponent;
  let fixture: ComponentFixture<AvgClickRateWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvgClickRateWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvgClickRateWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
