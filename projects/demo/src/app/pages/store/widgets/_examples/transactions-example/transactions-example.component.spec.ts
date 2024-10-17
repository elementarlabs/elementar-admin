import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsExampleComponent } from './transactions-example.component';

describe('TransactionsExampleComponent', () => {
  let component: TransactionsExampleComponent;
  let fixture: ComponentFixture<TransactionsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
