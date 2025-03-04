import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorDividerComponent } from './comment-editor-divider.component';

describe('CommentEditorDividerComponent', () => {
  let component: CommentEditorDividerComponent;
  let fixture: ComponentFixture<CommentEditorDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
