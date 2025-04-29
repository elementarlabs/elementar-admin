import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSubscribersExampleComponent } from './total-subscribers-example.component';

describe('TotalSubscribersExampleComponent', () => {
  let component: TotalSubscribersExampleComponent;
  let fixture: ComponentFixture<TotalSubscribersExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalSubscribersExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalSubscribersExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
