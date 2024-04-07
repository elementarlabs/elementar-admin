import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerCustomIconExampleComponent } from './datepicker-custom-icon-example.component';

describe('DatepickerCustomIconExampleComponent', () => {
  let component: DatepickerCustomIconExampleComponent;
  let fixture: ComponentFixture<DatepickerCustomIconExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerCustomIconExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerCustomIconExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
