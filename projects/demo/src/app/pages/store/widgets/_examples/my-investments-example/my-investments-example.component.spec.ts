import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInvestmentsExampleComponent } from './my-investments-example.component';

describe('MyInvestmentsExampleComponent', () => {
  let component: MyInvestmentsExampleComponent;
  let fixture: ComponentFixture<MyInvestmentsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyInvestmentsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInvestmentsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
