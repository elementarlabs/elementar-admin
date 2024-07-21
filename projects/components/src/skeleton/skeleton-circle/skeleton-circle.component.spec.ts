import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonCircleComponent } from './skeleton-circle.component';

describe('SkeletonCircleComponent', () => {
  let component: SkeletonCircleComponent;
  let fixture: ComponentFixture<SkeletonCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonCircleComponent]
    });
    fixture = TestBed.createComponent(SkeletonCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
