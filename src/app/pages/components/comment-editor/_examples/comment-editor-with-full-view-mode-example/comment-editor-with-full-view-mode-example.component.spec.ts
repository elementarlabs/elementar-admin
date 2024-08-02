import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorWithFullViewModeExampleComponent } from './comment-editor-with-full-view-mode-example.component';

describe('CommentEditorWithFullViewModeExampleComponent', () => {
  let component: CommentEditorWithFullViewModeExampleComponent;
  let fixture: ComponentFixture<CommentEditorWithFullViewModeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorWithFullViewModeExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorWithFullViewModeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
