import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertVariantsExampleComponent } from './alert-variants-example.component';

describe('AlertVariantsExampleComponent', () => {
  let component: AlertVariantsExampleComponent;
  let fixture: ComponentFixture<AlertVariantsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertVariantsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertVariantsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
