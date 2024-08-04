import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCommandsDividerComponent } from './comment-commands-divider.component';

describe('CommentCommandsDividerComponent', () => {
  let component: CommentCommandsDividerComponent;
  let fixture: ComponentFixture<CommentCommandsDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentCommandsDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentCommandsDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
