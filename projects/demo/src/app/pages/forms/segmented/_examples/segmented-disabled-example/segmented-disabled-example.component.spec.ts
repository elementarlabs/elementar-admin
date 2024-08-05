import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedDisabledExampleComponent } from './segmented-disabled-example.component';

describe('SegmentedDisabledExampleComponent', () => {
  let component: SegmentedDisabledExampleComponent;
  let fixture: ComponentFixture<SegmentedDisabledExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentedDisabledExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegmentedDisabledExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
