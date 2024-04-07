import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarWithCustomComponentExampleComponent } from './snackbar-with-custom-component-example.component';

describe('SnackbarWithCustomComponentExampleComponent', () => {
  let component: SnackbarWithCustomComponentExampleComponent;
  let fixture: ComponentFixture<SnackbarWithCustomComponentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarWithCustomComponentExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnackbarWithCustomComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
