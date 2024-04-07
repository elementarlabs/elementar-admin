import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerActionsButtonExampleComponent } from './datepicker-actions-button-example.component';

describe('DatepickerActionsButtonExampleComponent', () => {
  let component: DatepickerActionsButtonExampleComponent;
  let fixture: ComponentFixture<DatepickerActionsButtonExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerActionsButtonExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerActionsButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
