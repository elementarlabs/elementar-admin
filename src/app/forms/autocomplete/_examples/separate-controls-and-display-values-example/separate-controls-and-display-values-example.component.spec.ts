import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateControlsAndDisplayValuesExampleComponent } from './separate-controls-and-display-values-example.component';

describe('SeparateControlsAndDisplayValuesExampleComponent', () => {
  let component: SeparateControlsAndDisplayValuesExampleComponent;
  let fixture: ComponentFixture<SeparateControlsAndDisplayValuesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeparateControlsAndDisplayValuesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeparateControlsAndDisplayValuesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
