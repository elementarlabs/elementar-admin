import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgOpenRateExampleComponent } from './avg-open-rate-example.component';

describe('AvgOpenRateExampleComponent', () => {
  let component: AvgOpenRateExampleComponent;
  let fixture: ComponentFixture<AvgOpenRateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvgOpenRateExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgOpenRateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
