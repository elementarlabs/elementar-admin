import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarComponentExampleComponent } from './snackbar-component-example.component';

describe('SnackbarComponentExampleComponent', () => {
  let component: SnackbarComponentExampleComponent;
  let fixture: ComponentFixture<SnackbarComponentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarComponentExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnackbarComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
