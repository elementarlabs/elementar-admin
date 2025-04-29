import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardsExampleComponent } from './dashboard-cards-example.component';

describe('DashboardCardsExampleComponent', () => {
  let component: DashboardCardsExampleComponent;
  let fixture: ComponentFixture<DashboardCardsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCardsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCardsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
