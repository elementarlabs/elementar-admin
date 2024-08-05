import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverHoverExampleComponent } from './popover-hover-example.component';

describe('PopoverHoverExampleComponent', () => {
  let component: PopoverHoverExampleComponent;
  let fixture: ComponentFixture<PopoverHoverExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverHoverExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverHoverExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
