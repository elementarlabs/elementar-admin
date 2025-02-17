import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinInputAcceptCustomSymbolsExampleComponent } from './pin-input-accept-custom-symbols-example.component';

describe('PinInputAcceptCustomSymbolsExampleComponent', () => {
  let component: PinInputAcceptCustomSymbolsExampleComponent;
  let fixture: ComponentFixture<PinInputAcceptCustomSymbolsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinInputAcceptCustomSymbolsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PinInputAcceptCustomSymbolsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
