import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertWithBorderExampleComponent } from './alert-with-border-example.component';

describe('AlertWithBorderExampleComponent', () => {
  let component: AlertWithBorderExampleComponent;
  let fixture: ComponentFixture<AlertWithBorderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertWithBorderExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertWithBorderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
