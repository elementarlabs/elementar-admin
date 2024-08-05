import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerWithCustomHeaderExampleComponent } from './datepicker-with-custom-header-example.component';

describe('DatepickerWithCustomHeaderExampleComponent', () => {
  let component: DatepickerWithCustomHeaderExampleComponent;
  let fixture: ComponentFixture<DatepickerWithCustomHeaderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerWithCustomHeaderExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerWithCustomHeaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
