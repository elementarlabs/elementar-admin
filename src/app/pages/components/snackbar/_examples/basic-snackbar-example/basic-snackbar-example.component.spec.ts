import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSnackbarExampleComponent } from './basic-snackbar-example.component';

describe('BasicSnackbarExampleComponent', () => {
  let component: BasicSnackbarExampleComponent;
  let fixture: ComponentFixture<BasicSnackbarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSnackbarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicSnackbarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
