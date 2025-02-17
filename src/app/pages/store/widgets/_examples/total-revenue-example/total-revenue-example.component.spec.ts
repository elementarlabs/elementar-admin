import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRevenueExampleComponent } from './total-revenue-example.component';

describe('TotalRevenueExampleComponent', () => {
  let component: TotalRevenueExampleComponent;
  let fixture: ComponentFixture<TotalRevenueExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalRevenueExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalRevenueExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
