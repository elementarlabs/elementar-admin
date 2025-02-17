import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertWithTitleExampleComponent } from './alert-with-title-example.component';

describe('AlertWithTitleExampleComponent', () => {
  let component: AlertWithTitleExampleComponent;
  let fixture: ComponentFixture<AlertWithTitleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertWithTitleExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertWithTitleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
