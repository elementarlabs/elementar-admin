import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementGlobalComponent } from './announcement-global.component';

describe('AnnouncementGlobalComponent', () => {
  let component: AnnouncementGlobalComponent;
  let fixture: ComponentFixture<AnnouncementGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementGlobalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
