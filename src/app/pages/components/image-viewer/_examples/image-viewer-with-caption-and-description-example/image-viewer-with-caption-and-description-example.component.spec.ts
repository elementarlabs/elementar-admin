import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewerWithCaptionAndDescriptionExampleComponent } from './image-viewer-with-caption-and-description-example.component';

describe('ImageViewerWithCaptionAndDescriptionExampleComponent', () => {
  let component: ImageViewerWithCaptionAndDescriptionExampleComponent;
  let fixture: ComponentFixture<ImageViewerWithCaptionAndDescriptionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageViewerWithCaptionAndDescriptionExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageViewerWithCaptionAndDescriptionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
