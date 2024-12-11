import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorBubbleMenuComponent } from './text-editor-bubble-menu.component';

describe('TextEditorBubbleMenuComponent', () => {
  let component: TextEditorBubbleMenuComponent;
  let fixture: ComponentFixture<TextEditorBubbleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorBubbleMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorBubbleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
