import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsExtendedFabExampleComponent } from './buttons-extended-fab-example.component';

describe('ButtonsExtendedFabExampleComponent', () => {
  let component: ButtonsExtendedFabExampleComponent;
  let fixture: ComponentFixture<ButtonsExtendedFabExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsExtendedFabExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsExtendedFabExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
