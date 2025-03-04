import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorToolbarComponent } from './comment-editor-toolbar.component';

describe('CommentEditorToolbarComponent', () => {
  let component: CommentEditorToolbarComponent;
  let fixture: ComponentFixture<CommentEditorToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
