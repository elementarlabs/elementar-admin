import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorWithCustomIconsExampleComponent } from './comment-editor-with-custom-icons-example.component';

describe('CommentEditorWithCustomIconsExampleComponent', () => {
  let component: CommentEditorWithCustomIconsExampleComponent;
  let fixture: ComponentFixture<CommentEditorWithCustomIconsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorWithCustomIconsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorWithCustomIconsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
