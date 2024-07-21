import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSpyNavComponent } from './scroll-spy-nav.component';

describe('ScrollSpyNavComponent', () => {
  let component: ScrollSpyNavComponent;
  let fixture: ComponentFixture<ScrollSpyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollSpyNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollSpyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
