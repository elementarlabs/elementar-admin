import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonBlockComponent } from './skeleton-block.component';

describe('SkeletonBlockComponent', () => {
  let component: SkeletonBlockComponent;
  let fixture: ComponentFixture<SkeletonBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [SkeletonBlockComponent]
});
    fixture = TestBed.createComponent(SkeletonBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
