import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarPresenceIndicatorExampleComponent } from './avatar-presence-indicator-example.component';

describe('AvatarPresenceIndicatorExampleComponent', () => {
  let component: AvatarPresenceIndicatorExampleComponent;
  let fixture: ComponentFixture<AvatarPresenceIndicatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarPresenceIndicatorExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarPresenceIndicatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
