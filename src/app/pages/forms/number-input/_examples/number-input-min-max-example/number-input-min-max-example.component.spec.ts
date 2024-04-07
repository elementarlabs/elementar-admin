import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputMinMaxExampleComponent } from './number-input-min-max-example.component';

describe('NumberInputMinMaxExampleComponent', () => {
  let component: NumberInputMinMaxExampleComponent;
  let fixture: ComponentFixture<NumberInputMinMaxExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberInputMinMaxExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberInputMinMaxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
