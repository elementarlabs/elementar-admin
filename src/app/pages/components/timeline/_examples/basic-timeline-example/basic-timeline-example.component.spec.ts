import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTimelineExampleComponent } from './basic-timeline-example.component';

describe('BasicTimelineExampleComponent', () => {
  let component: BasicTimelineExampleComponent;
  let fixture: ComponentFixture<BasicTimelineExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTimelineExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicTimelineExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
