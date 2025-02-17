import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementWithIconsExampleComponent } from './announcement-with-icons-example.component';

describe('AnnouncementWithIconsExampleComponent', () => {
  let component: AnnouncementWithIconsExampleComponent;
  let fixture: ComponentFixture<AnnouncementWithIconsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementWithIconsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnouncementWithIconsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
