import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDateRangePickerExampleComponent } from './basic-date-range-picker-example.component';

describe('BasicDateRangePickerExampleComponent', () => {
  let component: BasicDateRangePickerExampleComponent;
  let fixture: ComponentFixture<BasicDateRangePickerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDateRangePickerExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicDateRangePickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
