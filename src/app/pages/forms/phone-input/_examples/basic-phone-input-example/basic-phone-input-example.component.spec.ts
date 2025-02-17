import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPhoneInputExampleComponent } from './basic-phone-input-example.component';

describe('BasicPhoneInputExampleComponent', () => {
  let component: BasicPhoneInputExampleComponent;
  let fixture: ComponentFixture<BasicPhoneInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPhoneInputExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicPhoneInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
