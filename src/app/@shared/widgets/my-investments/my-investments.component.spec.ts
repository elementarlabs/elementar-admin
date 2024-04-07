import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInvestmentsComponent } from './my-investments.component';

describe('MyInvestmentsComponent', () => {
  let component: MyInvestmentsComponent;
  let fixture: ComponentFixture<MyInvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyInvestmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
