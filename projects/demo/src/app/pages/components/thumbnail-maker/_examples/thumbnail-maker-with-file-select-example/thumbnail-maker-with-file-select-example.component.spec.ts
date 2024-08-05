import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailMakerWithFileSelectExampleComponent } from './thumbnail-maker-with-file-select-example.component';

describe('ThumbnailMakerWithFileSelectExampleComponent', () => {
  let component: ThumbnailMakerWithFileSelectExampleComponent;
  let fixture: ComponentFixture<ThumbnailMakerWithFileSelectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThumbnailMakerWithFileSelectExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbnailMakerWithFileSelectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
