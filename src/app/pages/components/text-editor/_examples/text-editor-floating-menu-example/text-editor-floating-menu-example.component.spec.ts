import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorFloatingMenuExampleComponent } from './text-editor-floating-menu-example.component';

describe('TextEditorFloatingMenuExampleComponent', () => {
  let component: TextEditorFloatingMenuExampleComponent;
  let fixture: ComponentFixture<TextEditorFloatingMenuExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorFloatingMenuExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorFloatingMenuExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
