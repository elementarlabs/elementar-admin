import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinInputLengthExampleComponent } from './pin-input-length-example.component';

describe('PinInputLengthExampleComponent', () => {
  let component: PinInputLengthExampleComponent;
  let fixture: ComponentFixture<PinInputLengthExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinInputLengthExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PinInputLengthExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
