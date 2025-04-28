import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorWithMaxContentHeightExampleComponent } from './comment-editor-with-max-content-height-example.component';

describe('CommentEditorWithMaxContentHeightExampleComponent', () => {
  let component: CommentEditorWithMaxContentHeightExampleComponent;
  let fixture: ComponentFixture<CommentEditorWithMaxContentHeightExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorWithMaxContentHeightExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorWithMaxContentHeightExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
