import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitInsightsExampleComponent } from './visit-insights-example.component';

describe('VisitInsightsExampleComponent', () => {
  let component: VisitInsightsExampleComponent;
  let fixture: ComponentFixture<VisitInsightsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitInsightsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitInsightsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
