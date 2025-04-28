import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHideAnnouncementDynamicallyComponent } from './show-hide-announcement-dynamically.component';

describe('ShowHideAnnouncementDynamicallyComponent', () => {
  let component: ShowHideAnnouncementDynamicallyComponent;
  let fixture: ComponentFixture<ShowHideAnnouncementDynamicallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowHideAnnouncementDynamicallyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowHideAnnouncementDynamicallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
