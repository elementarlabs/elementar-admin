import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorFooterBarComponent } from './comment-editor-footer-bar.component';

describe('CommentEditorFooterBarComponent', () => {
  let component: CommentEditorFooterBarComponent;
  let fixture: ComponentFixture<CommentEditorFooterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorFooterBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorFooterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
