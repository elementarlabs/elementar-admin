import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCommentEditorExampleComponent } from './basic-comment-editor-example.component';

describe('BasicCommentEditorExampleComponent', () => {
  let component: BasicCommentEditorExampleComponent;
  let fixture: ComponentFixture<BasicCommentEditorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCommentEditorExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicCommentEditorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
