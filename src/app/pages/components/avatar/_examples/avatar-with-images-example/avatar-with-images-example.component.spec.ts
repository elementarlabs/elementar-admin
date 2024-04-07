import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarWithImagesExampleComponent } from './avatar-with-images-example.component';

describe('AvatarWithImagesExampleComponent', () => {
  let component: AvatarWithImagesExampleComponent;
  let fixture: ComponentFixture<AvatarWithImagesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarWithImagesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarWithImagesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
