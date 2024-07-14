import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailMakerWithHelperTextExampleComponent } from './thumbnail-maker-with-helper-text-example.component';

describe('ThumbnailMakerWithHelperTextExampleComponent', () => {
  let component: ThumbnailMakerWithHelperTextExampleComponent;
  let fixture: ComponentFixture<ThumbnailMakerWithHelperTextExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThumbnailMakerWithHelperTextExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbnailMakerWithHelperTextExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
