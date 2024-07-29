import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageExtComponent } from './image-ext.component';

describe('ImageExtComponent', () => {
  let component: ImageExtComponent;
  let fixture: ComponentFixture<ImageExtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageExtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
