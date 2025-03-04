import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadingPlaceholderComponent } from './image-uploading-placeholder.component';

describe('ImageUploadingPlaceholderComponent', () => {
  let component: ImageUploadingPlaceholderComponent;
  let fixture: ComponentFixture<ImageUploadingPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageUploadingPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageUploadingPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
