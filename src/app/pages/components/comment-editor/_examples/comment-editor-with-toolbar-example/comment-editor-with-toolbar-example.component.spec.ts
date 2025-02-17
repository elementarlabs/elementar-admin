import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorWithToolbarExampleComponent } from './comment-editor-with-toolbar-example.component';

describe('CommentEditorWithToolbarExampleComponent', () => {
  let component: CommentEditorWithToolbarExampleComponent;
  let fixture: ComponentFixture<CommentEditorWithToolbarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorWithToolbarExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorWithToolbarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
