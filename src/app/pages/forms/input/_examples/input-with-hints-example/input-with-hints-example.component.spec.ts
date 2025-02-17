import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithHintsExampleComponent } from './input-with-hints-example.component';

describe('InputWithHintsExampleComponent', () => {
  let component: InputWithHintsExampleComponent;
  let fixture: ComponentFixture<InputWithHintsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWithHintsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputWithHintsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
