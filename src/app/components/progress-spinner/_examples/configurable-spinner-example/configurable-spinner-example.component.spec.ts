import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableSpinnerExampleComponent } from './configurable-spinner-example.component';

describe('ConfigurableSpinnerExampleComponent', () => {
  let component: ConfigurableSpinnerExampleComponent;
  let fixture: ComponentFixture<ConfigurableSpinnerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurableSpinnerExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurableSpinnerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
