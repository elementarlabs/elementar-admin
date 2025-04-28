import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedWithIconsExampleComponent } from './segmented-with-icons-example.component';

describe('SegmentedWithIconsExampleComponent', () => {
  let component: SegmentedWithIconsExampleComponent;
  let fixture: ComponentFixture<SegmentedWithIconsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentedWithIconsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegmentedWithIconsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
