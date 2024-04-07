import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSegmentedExampleComponent } from './basic-segmented-example.component';

describe('BasicSegmentedExampleComponent', () => {
  let component: BasicSegmentedExampleComponent;
  let fixture: ComponentFixture<BasicSegmentedExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSegmentedExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicSegmentedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
