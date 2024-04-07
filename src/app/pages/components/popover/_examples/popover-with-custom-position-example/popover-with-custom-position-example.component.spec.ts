import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverWithCustomPositionExampleComponent } from './popover-with-custom-position-example.component';

describe('PopoverWithCustomPositionExampleComponent', () => {
  let component: PopoverWithCustomPositionExampleComponent;
  let fixture: ComponentFixture<PopoverWithCustomPositionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverWithCustomPositionExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverWithCustomPositionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
