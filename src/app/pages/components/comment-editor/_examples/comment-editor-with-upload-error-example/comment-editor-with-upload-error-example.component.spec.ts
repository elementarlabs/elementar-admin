import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorWithUploadErrorExampleComponent } from './comment-editor-with-upload-error-example.component';

describe('CommentEditorWithUploadErrorExampleComponent', () => {
  let component: CommentEditorWithUploadErrorExampleComponent;
  let fixture: ComponentFixture<CommentEditorWithUploadErrorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorWithUploadErrorExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorWithUploadErrorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
