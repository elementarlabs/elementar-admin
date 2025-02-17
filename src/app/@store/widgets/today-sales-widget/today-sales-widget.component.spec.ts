import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySalesWidgetComponent } from './today-sales-widget.component';

describe('TodaySalesWidgetComponent', () => {
  let component: TodaySalesWidgetComponent;
  let fixture: ComponentFixture<TodaySalesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaySalesWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodaySalesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
