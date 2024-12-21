import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerCustomToggleIconExampleComponent } from './timepicker-custom-toggle-icon-example.component';

describe('TimepickerCustomToggleIconExampleComponent', () => {
  let component: TimepickerCustomToggleIconExampleComponent;
  let fixture: ComponentFixture<TimepickerCustomToggleIconExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimepickerCustomToggleIconExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimepickerCustomToggleIconExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
