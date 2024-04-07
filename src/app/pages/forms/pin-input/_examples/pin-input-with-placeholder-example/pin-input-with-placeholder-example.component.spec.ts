import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinInputWithPlaceholderExampleComponent } from './pin-input-with-placeholder-example.component';

describe('PinInputWithPlaceholderExampleComponent', () => {
  let component: PinInputWithPlaceholderExampleComponent;
  let fixture: ComponentFixture<PinInputWithPlaceholderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinInputWithPlaceholderExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PinInputWithPlaceholderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
