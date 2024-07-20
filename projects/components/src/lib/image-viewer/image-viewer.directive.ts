import { AfterContentInit, contentChildren, DestroyRef, Directive, inject, Injector } from '@angular/core';
import { ImageViewerPictureDirective } from './image-viewer-picture.directive';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PictureRef } from './picture-ref';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { IMAGE_VIEWER_PICTURE_DATA, IMAGE_VIEWER_PICTURE_REF, PictureOptions } from './types';

@Directive({
  selector: '[emrImageViewer]',
  standalone: true
})
export class ImageViewerDirective implements AfterContentInit {
  private _images = contentChildren(ImageViewerPictureDirective);
  private _overlay = inject(Overlay);
  private _injector = inject(Injector);
  private _destroyRef = inject(DestroyRef);

  get api() {
    return {
      open: (options: PictureOptions): PictureRef => this._open(options)
    }
  }

  ngAfterContentInit() {
    // console.log(this._images());
  }

  private _open(options: PictureOptions): PictureRef {
    const pictureRef = new PictureRef();
    const overlayRef = this._overlay.create({
      positionStrategy: this._overlay.position().global(),
      hasBackdrop: true
    });
    const injector = Injector.create({
      providers: [
        {
          provide: IMAGE_VIEWER_PICTURE_REF,
          useValue: pictureRef
        },
        {
          provide: IMAGE_VIEWER_PICTURE_DATA,
          useValue: options
        }
      ],
      parent: this._injector
    });
    const portal = new ComponentPortal(ImageViewerComponent, null, injector);
    overlayRef.attach(portal);
    pictureRef.closed.pipe(
      takeUntilDestroyed(this._destroyRef)
    ).subscribe(() => {
      overlayRef.detach();
    });
    return pictureRef;
  }
}
