import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorToolbarComponent } from './text-editor-toolbar.component';

describe('TextEditorToolbarComponent', () => {
  let component: TextEditorToolbarComponent;
  let fixture: ComponentFixture<TextEditorToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
