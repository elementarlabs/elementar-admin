import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgOpenRateWidgetComponent } from './avg-open-rate-widget.component';

describe('AvgOpenRateWidgetComponent', () => {
  let component: AvgOpenRateWidgetComponent;
  let fixture: ComponentFixture<AvgOpenRateWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvgOpenRateWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvgOpenRateWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
