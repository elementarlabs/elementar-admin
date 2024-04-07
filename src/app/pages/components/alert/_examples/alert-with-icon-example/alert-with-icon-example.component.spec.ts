import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertWithIconExampleComponent } from './alert-with-icon-example.component';

describe('AlertWithIconExampleComponent', () => {
  let component: AlertWithIconExampleComponent;
  let fixture: ComponentFixture<AlertWithIconExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertWithIconExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertWithIconExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
