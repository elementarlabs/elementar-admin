import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSkeletonExampleComponent } from './basic-skeleton-example.component';

describe('BasicSkeletonExampleComponent', () => {
  let component: BasicSkeletonExampleComponent;
  let fixture: ComponentFixture<BasicSkeletonExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSkeletonExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicSkeletonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
