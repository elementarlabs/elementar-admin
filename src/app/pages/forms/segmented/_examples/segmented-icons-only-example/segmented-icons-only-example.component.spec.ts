import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedIconsOnlyExampleComponent } from './segmented-icons-only-example.component';

describe('SegmentedIconsOnlyExampleComponent', () => {
  let component: SegmentedIconsOnlyExampleComponent;
  let fixture: ComponentFixture<SegmentedIconsOnlyExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentedIconsOnlyExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentedIconsOnlyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
