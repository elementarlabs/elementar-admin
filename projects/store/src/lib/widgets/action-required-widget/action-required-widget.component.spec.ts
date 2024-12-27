import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionRequiredWidgetComponent } from './action-required-widget.component';

describe('ActionRequiredWidgetComponent', () => {
  let component: ActionRequiredWidgetComponent;
  let fixture: ComponentFixture<ActionRequiredWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionRequiredWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionRequiredWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
