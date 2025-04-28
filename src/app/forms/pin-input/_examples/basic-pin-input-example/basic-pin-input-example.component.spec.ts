import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPinInputExampleComponent } from './basic-pin-input-example.component';

describe('BasicPinInputExampleComponent', () => {
  let component: BasicPinInputExampleComponent;
  let fixture: ComponentFixture<BasicPinInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPinInputExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicPinInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
