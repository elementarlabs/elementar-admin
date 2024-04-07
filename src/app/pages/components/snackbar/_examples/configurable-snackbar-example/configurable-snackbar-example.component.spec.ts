import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableSnackbarExampleComponent } from './configurable-snackbar-example.component';

describe('ConfigurableSnackbarExampleComponent', () => {
  let component: ConfigurableSnackbarExampleComponent;
  let fixture: ComponentFixture<ConfigurableSnackbarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurableSnackbarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurableSnackbarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
