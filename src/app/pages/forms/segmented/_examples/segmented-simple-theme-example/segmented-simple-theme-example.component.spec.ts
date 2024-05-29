import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedSimpleThemeExampleComponent } from './segmented-simple-theme-example.component';

describe('SegmentedSimpleThemeExampleComponent', () => {
  let component: SegmentedSimpleThemeExampleComponent;
  let fixture: ComponentFixture<SegmentedSimpleThemeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentedSimpleThemeExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegmentedSimpleThemeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
