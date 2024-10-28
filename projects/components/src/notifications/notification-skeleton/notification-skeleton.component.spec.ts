import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSkeletonComponent } from './notification-skeleton.component';

describe('NotificationSkeletonComponent', () => {
  let component: NotificationSkeletonComponent;
  let fixture: ComponentFixture<NotificationSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
