import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorDividerComponent } from './text-editor-divider.component';

describe('TextEditorDividerComponent', () => {
  let component: TextEditorDividerComponent;
  let fixture: ComponentFixture<TextEditorDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
