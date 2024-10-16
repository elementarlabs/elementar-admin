import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteToEditorFilesInFolderNotificationExampleComponent } from './invite-to-editor-files-in-folder-notification-example.component';

describe('InviteToEditorFilesInFolderNotificationExampleComponent', () => {
  let component: InviteToEditorFilesInFolderNotificationExampleComponent;
  let fixture: ComponentFixture<InviteToEditorFilesInFolderNotificationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteToEditorFilesInFolderNotificationExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteToEditorFilesInFolderNotificationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
