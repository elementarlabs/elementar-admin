import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicThumbnailMakerComponent } from './basic-thumbnail-maker.component';

describe('BasicThumbnailMakerComponent', () => {
  let component: BasicThumbnailMakerComponent;
  let fixture: ComponentFixture<BasicThumbnailMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicThumbnailMakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicThumbnailMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
