import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditorCustomButtonLabelsExampleComponent } from './comment-editor-custom-button-labels-example.component';

describe('CommentEditorCustomButtonLabelsExampleComponent', () => {
  let component: CommentEditorCustomButtonLabelsExampleComponent;
  let fixture: ComponentFixture<CommentEditorCustomButtonLabelsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentEditorCustomButtonLabelsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditorCustomButtonLabelsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
