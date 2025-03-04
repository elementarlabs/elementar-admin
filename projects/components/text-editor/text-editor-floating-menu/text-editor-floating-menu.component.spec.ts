import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorFloatingMenuComponent } from './text-editor-floating-menu.component';

describe('TextEditorFloatingMenuComponent', () => {
  let component: TextEditorFloatingMenuComponent;
  let fixture: ComponentFixture<TextEditorFloatingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorFloatingMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorFloatingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
