import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorCancelButtonAlwaysVisibleExampleComponent } from './comment-editor-cancel-button-always-visible-example.component';

describe('CommentEditorCancelButtonAlwaysVisibleExampleComponent', () => {
  let component: CommentEditorCancelButtonAlwaysVisibleExampleComponent;
  let fixture: ComponentFixture<CommentEditorCancelButtonAlwaysVisibleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorCancelButtonAlwaysVisibleExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorCancelButtonAlwaysVisibleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
