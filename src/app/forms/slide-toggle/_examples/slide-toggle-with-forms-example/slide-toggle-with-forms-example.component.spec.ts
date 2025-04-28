import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleWithFormsExampleComponent } from './slide-toggle-with-forms-example.component';

describe('SlideToggleWithFormsExampleComponent', () => {
  let component: SlideToggleWithFormsExampleComponent;
  let fixture: ComponentFixture<SlideToggleWithFormsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideToggleWithFormsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideToggleWithFormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
