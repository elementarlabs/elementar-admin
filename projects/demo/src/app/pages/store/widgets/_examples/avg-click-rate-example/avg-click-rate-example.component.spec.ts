import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgClickRateExampleComponent } from './avg-click-rate-example.component';

describe('AvgClickRateExampleComponent', () => {
  let component: AvgClickRateExampleComponent;
  let fixture: ComponentFixture<AvgClickRateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvgClickRateExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgClickRateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
