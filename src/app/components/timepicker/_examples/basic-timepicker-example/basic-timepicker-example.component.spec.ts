import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTimepickerExampleComponent } from './basic-timepicker-example.component';

describe('BasicTimepickerExampleComponent', () => {
  let component: BasicTimepickerExampleComponent;
  let fixture: ComponentFixture<BasicTimepickerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTimepickerExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicTimepickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
