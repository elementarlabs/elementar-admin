import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailMakerComponent } from './thumbnail-maker.component';

describe('ThumbnailMakerComponent', () => {
  let component: ThumbnailMakerComponent;
  let fixture: ComponentFixture<ThumbnailMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThumbnailMakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbnailMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
