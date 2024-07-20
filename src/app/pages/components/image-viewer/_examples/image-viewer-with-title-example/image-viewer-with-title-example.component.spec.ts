import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewerWithTitleExampleComponent } from './image-viewer-with-title-example.component';

describe('ImageViewerWithTitleExampleComponent', () => {
  let component: ImageViewerWithTitleExampleComponent;
  let fixture: ComponentFixture<ImageViewerWithTitleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageViewerWithTitleExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageViewerWithTitleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
