import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessagesExampleComponent } from './error-messages-example.component';

describe('ErrorMessagesExampleComponent', () => {
  let component: ErrorMessagesExampleComponent;
  let fixture: ComponentFixture<ErrorMessagesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessagesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorMessagesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
