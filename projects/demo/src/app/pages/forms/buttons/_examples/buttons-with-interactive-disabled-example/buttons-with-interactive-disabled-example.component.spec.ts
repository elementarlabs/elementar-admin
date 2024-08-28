import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsWithInteractiveDisabledExampleComponent } from './buttons-with-interactive-disabled-example.component';

describe('ButtonsWithInteractiveDisabledExampleComponent', () => {
  let component: ButtonsWithInteractiveDisabledExampleComponent;
  let fixture: ComponentFixture<ButtonsWithInteractiveDisabledExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsWithInteractiveDisabledExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsWithInteractiveDisabledExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
