import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPlanWidgetComponent } from './current-plan-widget.component';

describe('CurrentPlanWidgetComponent', () => {
  let component: CurrentPlanWidgetComponent;
  let fixture: ComponentFixture<CurrentPlanWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentPlanWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentPlanWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
