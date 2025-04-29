import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRevenueWidgetComponent } from './total-revenue-widget.component';

describe('TotalRevenueWidgetComponent', () => {
  let component: TotalRevenueWidgetComponent;
  let fixture: ComponentFixture<TotalRevenueWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalRevenueWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalRevenueWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
