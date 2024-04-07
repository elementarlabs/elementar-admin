import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertActionsExampleComponent } from './alert-actions-example.component';

describe('AlertActionsExampleComponent', () => {
  let component: AlertActionsExampleComponent;
  let fixture: ComponentFixture<AlertActionsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertActionsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertActionsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
