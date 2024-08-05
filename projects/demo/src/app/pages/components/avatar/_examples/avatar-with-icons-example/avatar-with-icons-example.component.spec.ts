import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarWithIconsExampleComponent } from './avatar-with-icons-example.component';

describe('AvatarWithIconsExampleComponent', () => {
  let component: AvatarWithIconsExampleComponent;
  let fixture: ComponentFixture<AvatarWithIconsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarWithIconsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarWithIconsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
