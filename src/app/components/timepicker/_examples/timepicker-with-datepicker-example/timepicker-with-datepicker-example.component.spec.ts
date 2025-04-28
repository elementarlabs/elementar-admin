import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerWithDatepickerExampleComponent } from './timepicker-with-datepicker-example.component';

describe('TimepickerWithDatepickerExampleComponent', () => {
  let component: TimepickerWithDatepickerExampleComponent;
  let fixture: ComponentFixture<TimepickerWithDatepickerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimepickerWithDatepickerExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimepickerWithDatepickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
