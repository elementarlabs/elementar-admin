import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedSizesExampleComponent } from './segmented-sizes-example.component';

describe('SegmentedSizesExampleComponent', () => {
  let component: SegmentedSizesExampleComponent;
  let fixture: ComponentFixture<SegmentedSizesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentedSizesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegmentedSizesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
