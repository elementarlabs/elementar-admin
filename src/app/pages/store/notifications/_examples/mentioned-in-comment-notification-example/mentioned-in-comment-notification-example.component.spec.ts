import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionedInCommentNotificationExampleComponent } from './mentioned-in-comment-notification-example.component';

describe('MentionedInCommentNotificationExampleComponent', () => {
  let component: MentionedInCommentNotificationExampleComponent;
  let fixture: ComponentFixture<MentionedInCommentNotificationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentionedInCommentNotificationExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionedInCommentNotificationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
