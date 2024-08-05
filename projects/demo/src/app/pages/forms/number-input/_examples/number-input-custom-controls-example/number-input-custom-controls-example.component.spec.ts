import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputCustomControlsExampleComponent } from './number-input-custom-controls-example.component';

describe('NumberInputCustomControlsExampleComponent', () => {
  let component: NumberInputCustomControlsExampleComponent;
  let fixture: ComponentFixture<NumberInputCustomControlsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberInputCustomControlsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberInputCustomControlsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
