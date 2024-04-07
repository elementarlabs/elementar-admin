import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipWithACustomPositionExampleComponent } from './tooltip-with-a-custom-position-example.component';

describe('TooltipWithACustomPositionExampleComponent', () => {
  let component: TooltipWithACustomPositionExampleComponent;
  let fixture: ComponentFixture<TooltipWithACustomPositionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipWithACustomPositionExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TooltipWithACustomPositionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
