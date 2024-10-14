import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeExampleComponent } from './exchange-example.component';

describe('ExchangeExampleComponent', () => {
  let component: ExchangeExampleComponent;
  let fixture: ComponentFixture<ExchangeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
