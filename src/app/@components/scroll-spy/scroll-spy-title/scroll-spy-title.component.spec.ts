import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSpyTitleComponent } from './scroll-spy-title.component';

describe('ScrollSpyTitleComponent', () => {
  let component: ScrollSpyTitleComponent;
  let fixture: ComponentFixture<ScrollSpyTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollSpyTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollSpyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
