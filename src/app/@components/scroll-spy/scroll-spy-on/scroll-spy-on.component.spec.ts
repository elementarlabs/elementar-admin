import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSpyOnComponent } from './scroll-spy-on.component';

describe('ScrollSpyOnComponent', () => {
  let component: ScrollSpyOnComponent;
  let fixture: ComponentFixture<ScrollSpyOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollSpyOnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollSpyOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
