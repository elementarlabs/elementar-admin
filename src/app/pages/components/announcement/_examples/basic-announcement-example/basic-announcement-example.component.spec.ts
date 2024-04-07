import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAnnouncementExampleComponent } from './basic-announcement-example.component';

describe('BasicAnnouncementExampleComponent', () => {
  let component: BasicAnnouncementExampleComponent;
  let fixture: ComponentFixture<BasicAnnouncementExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicAnnouncementExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicAnnouncementExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
