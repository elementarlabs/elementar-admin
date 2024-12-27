import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionRequiredComponent } from './action-required.component';

describe('ActionRequiredComponent', () => {
  let component: ActionRequiredComponent;
  let fixture: ComponentFixture<ActionRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionRequiredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
