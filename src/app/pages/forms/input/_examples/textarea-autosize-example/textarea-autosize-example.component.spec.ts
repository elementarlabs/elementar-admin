import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaAutosizeExampleComponent } from './textarea-autosize-example.component';

describe('TextareaAutosizeExampleComponent', () => {
  let component: TextareaAutosizeExampleComponent;
  let fixture: ComponentFixture<TextareaAutosizeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaAutosizeExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextareaAutosizeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
