import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicImageViewerExampleComponent } from './basic-image-viewer-example.component';

describe('BasicImageViewerExampleComponent', () => {
  let component: BasicImageViewerExampleComponent;
  let fixture: ComponentFixture<BasicImageViewerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicImageViewerExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicImageViewerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
