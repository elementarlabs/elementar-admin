import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSubscribersWidgetComponent } from './total-subscribers-widget.component';

describe('TotalSubscribersWidgetComponent', () => {
  let component: TotalSubscribersWidgetComponent;
  let fixture: ComponentFixture<TotalSubscribersWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalSubscribersWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalSubscribersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
