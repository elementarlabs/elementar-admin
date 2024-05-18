import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartTooltipComponent } from './mchart-tooltip.component';

describe('MchartTooltipComponent', () => {
  let component: MchartTooltipComponent;
  let fixture: ComponentFixture<MchartTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartTooltipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
