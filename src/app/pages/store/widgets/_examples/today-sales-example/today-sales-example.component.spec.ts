import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySalesExampleComponent } from './today-sales-example.component';

describe('TodaySalesExampleComponent', () => {
  let component: TodaySalesExampleComponent;
  let fixture: ComponentFixture<TodaySalesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaySalesExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaySalesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
