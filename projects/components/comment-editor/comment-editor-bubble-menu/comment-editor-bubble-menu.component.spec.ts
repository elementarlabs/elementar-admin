import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorBubbleMenuComponent } from './comment-editor-bubble-menu.component';

describe('CommentEditorBubbleMenuComponent', () => {
  let component: CommentEditorBubbleMenuComponent;
  let fixture: ComponentFixture<CommentEditorBubbleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorBubbleMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorBubbleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
