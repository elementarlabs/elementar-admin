import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPlanExampleComponent } from './current-plan-example.component';

describe('CurrentPlanExampleComponent', () => {
  let component: CurrentPlanExampleComponent;
  let fixture: ComponentFixture<CurrentPlanExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentPlanExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentPlanExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
